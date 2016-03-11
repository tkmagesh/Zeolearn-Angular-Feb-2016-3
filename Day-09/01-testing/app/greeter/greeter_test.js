describe("greeter module", function(){
	beforeEach(module("myApp.greeter"));

	describe("greeterController", function(){
		it("Should initialize name as an empty string", inject(function($controller){

			//Arrange
			var dummyScope = {};
			var expectedResult = '';

			//Act
			$controller("greeterController", {$scope : dummyScope});

			//Assert
			expect(dummyScope.name).toBe(expectedResult);

		}));
		it("Should initialize message as an empty string", inject(function($controller){

			//Arrange
			var dummyScope = {};
			var expectedResult = '';

			//Act
			$controller("greeterController", {$scope : dummyScope});

			//Assert
			expect(dummyScope.message).toBe(expectedResult);

		}));
		it("Should populate the message when greeted", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var expectedResult = 'Hi Magesh, Have a nice day!';

			//Act
			$controller("greeterController", {$scope : dummyScope});
			dummyScope.name = 'Magesh';
			dummyScope.greet();

			//Assert
			expect(dummyScope.message).toBe(expectedResult);
		}))
	});

	describe("trimText Filter", function(){
		it("Should return the given string for shorter strings", inject(function($filter){
			//Arrage
			var shortString = 'shortString',
				expectedResult = 'shortString',
				trimTextFilter = $filter('trimText');

			//Act
			var result = trimTextFilter(shortString);

			//Assert
			expect(result).toBe(expectedResult);
		}));

		it("Should return the truncated string for longer strings", inject(function($filter){
			//Arrage
			var shortString = 'This is a long string for testing the trimText filter',
				expectedResult = 'This is a long strin...',
				trimTextFilter = $filter('trimText');

			//Act
			var result = trimTextFilter(shortString);

			//Assert
			expect(result).toBe(expectedResult);
		}));
	});
})	