'use strict';

angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.user = {
    	'date': new Date()
    };
  });
