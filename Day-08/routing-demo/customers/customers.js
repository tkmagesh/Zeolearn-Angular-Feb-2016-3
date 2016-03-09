angular
	.module("myApp.customers", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			
			.when("/customers", {
				/*template : "<h2>Customers</h2>"*/
				templateUrl : 'customers/templates/customersTemplate.html'
			})
	});