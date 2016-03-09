angular
	.module("myApp.products")
	.controller("productInfoController", function($scope, productsService, $routeParams){
			var productId = parseInt($routeParams.id, 10);
			$scope.product= productsService.getAll().filter(function(product){
				return product.id === productId;
			})[0];
		});