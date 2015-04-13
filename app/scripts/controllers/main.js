'use strict';

angular.module('tareasApp')
.controller('MainCtrl',function($scope){
	$scope.tareas= ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
	$scope.addTarea = function(){
		$scope.tareas.push($scope.tarea);
		$scope.tarea = '';
	}
});
