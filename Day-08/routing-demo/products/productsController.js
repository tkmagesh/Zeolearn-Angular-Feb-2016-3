angular
	.module("myApp.products")
	.controller("productsController", function($scope, productsService){
			$scope.products = productsService.getAll();
		});