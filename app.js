(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope) {
    $scope.name="Renata";
    $scope.sayHello = function(){
      return "Hello Coursera";
    }
  });
})();
