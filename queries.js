/* Fill out these functions using Mongoose queries*/
'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    listings = require('./listings.json'),
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Connect to your database */
//mongoose.Promise = global.Promise
//console.log(listings.entries.length);
mongoose.connect(config.db.uri);
const db = mongoose.connection;
db.once('openUri', function callback () {
});
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
var query = Listing.findOne({ 'name': 'Library West' });
query.exec(function (err, list) {
  if (err) return handleError(err);
  console.log('%s', list) // Space Ghost is a talk show host.
})

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.find({ 'code':'CABL' }).remove().exec();
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

    var query = Listing.find({ 'name':'Phelps Laboratory' }, function (err, lists) {
    if (err) return handleError(err);
      var list = lists[0];
      if(list!=null){
      list.address = 'Phelps Lab, Gainesville, FL 32603';
      list.save(function (err, updatedList) {
        if (err) return handleError(err);
        res.send(updatedList);
      });
    }
  });
  query.exec(function (err, list) {
  if (err) return handleError(err);
  console.log('%s', list) // Space Ghost is a talk show host.
})
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   for(var i=0;i<listings.entries.length;i++){
    var x = new Listing({
    code: listings.entries[i].code,
    name: listings.entries[i].name,
    coordinates: JSON.stringify(listings.entries[i].coordinates),
    address: listings.entries[i].address
    });
    console.log(JSON.stringify(x));
}
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
