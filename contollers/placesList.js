var app = angular.module('VisitApp',[]);
app.controller('PlacesList',function($scope) {
  $scope.visited = [];
  $scope.places = ["Seattle, WA"];
  $scope.placeName = '';
  $scope.placeState = '';


  $scope.addLocation = function() {
    var newPlace = $scope.placeName+", "+$scope.placeState;
    $scope.places.push(newPlace);
    $scope.placeName = '';
    $scope.placeState = '';
  }

  $scope.removeLocation = function(index) {
    $scope.toVisit.splice(index,1);
  }

  $scope.visited = function(index) {
    var placeVisited = $scope.toVisit[index];
    $scope.toVisit.splice(index,1);
    $scope.visited.push(placeVisited);
  }


});
