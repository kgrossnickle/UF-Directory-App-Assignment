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
console.log(listings.entries.length);
mongoose.connect(config.db.uri);
const db = mongoose.connection;
db.once('openUri', function callback () {


  /*
   * First we'll add a few songs. Nothing is required to create the 
   * songs collection; it is created automatically when we insert.
   */
  /*
   * Then we need to give Boyz II Men credit for their contribution
   * to the hit "One Sweet Day".
   */

  
});

for(var i=0;i<listings.entries.length;i++){
    var x = new Listing({
    code: listings.entries[i].code,
    name: listings.entries[i].name,
    //coordinates:
    address: listings.entries[i].address
    });
    x.save(function(err, listings){
      });
}


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */