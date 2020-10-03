console.log('Hello world');
console.log('Welcome to this very useful JS file!')

const runText = ([first, ...rest]) => [...rest, first].join('')

const app = angular.module('app', []);

app.controller('AngularController', function AngularController($scope) {
  $scope.string = 'Stuff';
  $scope.message = 'Welcome!';
  setInterval(() => {
    $scope.message = runText($scope.message);
    $scope.$apply();
  }, 300);
});
