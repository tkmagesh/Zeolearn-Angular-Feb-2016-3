angular
	.module("myApp.greeter", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/greet", {
				templateUrl : 'greeter/greet.html',
				controller : 'greeterController'
			});
	})
	.controller('greeterController', function($scope){
		$scope.name = '';
		$scope.message = '';
		$scope.greet = function(){
			$scope.message = 'Hi ' + $scope.name + ', Have a nice day!';
		}
	})
	.filter('trimText', function(){
		return function(data){
			return data.length < 20 ? data : data.substr(0,20) + '...';
		}
	});