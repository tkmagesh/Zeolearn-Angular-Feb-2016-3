angular
	.module("myApp", ["myApp.products", "myApp.customers", "ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.otherwise({
				redirectTo : "/products"
			});
	});
