var app = angular.module('VisitApp',[]);
app.controller('PlacesList',function($scope)){
  $scope.visited = [];
  $scope.toVisit = [];
  $scope.place = '';


  $scope.addLocation = function() {
    $scope.toVisit.push($scope.place);
    $scope.place = '';
  }

  $scope.removeLocation = function(index) {
    $scope.toVisit.splice(index,1);
  }

  $scope.visited = function(index) {
    var placeVisited = $scope.toVisit[index];
    $scope.toVisit.splice(index,1);
    $scope.visited.push(placeVisited);
  }

  
}
