var app = angular.module('VisitApp',[]);
app.controller('PlacesList',function($scope) {
  $scope.placesGone = [];
  $scope.places = [];
  $scope.placeName = '';
  $scope.placeState = '';


  $scope.addLocation = function() {
    var newPlace = $scope.placeName+", "+$scope.placeState;
    $scope.places.push(newPlace);
    $scope.placeName = '';
    $scope.placeState = '';
  }

  $scope.removeLocation = function(index) {
    $scope.places.splice(index, 1);
  }

  $scope.visited = function(index) {
    var placeVisited = $scope.places[index];
    $scope.places.splice(index,1);
    $scope.placesGone.push(placeVisited);
  }

  $scope.removeVisited = function(index) {
    $scope.placesGone.splice(index,1);
  }
});
