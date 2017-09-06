angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchName   = '';

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
            code: $scope.itemCode,
            name: $scope.itemName,
            address: $scope.itemAddress,
            coordinates: "{ "+$scope.itemLat+", "+$scope.itemLong+" }"
        });

    };
    $scope.deleteListing = function(item) {
      var index = $scope.listings.indexOf(item);
      $scope.listings.splice(index, 1);   

    };
    $scope.moreInfo = function(id) {
      var coord ="No coordinates for this building";
      var address ="No address for this building";
      if(JSON.stringify(id.coordinates)){
        coord = JSON.stringify(id.coordinates);
      }
      if(id.address){
        address = id.address;
      }
      $scope.message = "Coordinates: " + coord + "\nAddress: " + address;
    };
  }
]);