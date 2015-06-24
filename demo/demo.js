angular
  .module('demoApp', ['ngFamous'])
  .controller('MainCtrl', function($scope) {
    $scope.items = (new Array(10));
  });


angular.bootstrap(document, ['demoApp']);
