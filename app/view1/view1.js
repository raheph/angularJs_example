'use strict';

angular.module('myApp.view1', ['ngRoute']).
  controller('View1Ctrl', function($scope, customers){
   $scope.allcustomers =  customers.query();
})

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);