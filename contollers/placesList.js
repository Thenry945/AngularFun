var app = angular.module('VisitApp',[]);
app.controller('PlacesList',function($scope) {
  $scope.visited = [];
  $scope.toVisit = [{name:"Seattle",state:"WA"}];
  $scope.placeName = '';
  $scope.placeState = '';


  $scope.addLocation = function() {
    var newPlace = {name:$scope.placeName,state:$scope.placeState};
    $scope.toVisit.push(newPlace);
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
