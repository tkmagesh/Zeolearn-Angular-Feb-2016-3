angular
	.module("myApp.products", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/products", {
				/*template : "<h2>Products</h2>"*/
				templateUrl : 'products/templates/productsTemplate.html',
				controller : 'productsController'
			})
			.when("/products/:id", {
				templateUrl : 'products/templates/productInfoTemplate.html',
				controller : 'productInfoController'
			});
	});