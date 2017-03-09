/**
 * 
 */

(function(){
	
	// get the module reference already created in the configuration file.
	var app = angular.module("githubViewer");
	
	var MainController = function($scope, $interval, $location){
	
		// private implementation
		var myFunction = function(param1, param2){
			// whatever functionality it does.
		};

		var myOtherFunction = function(param1){
			// whatever functionality it does
		};


		// public implementation.
		// public method example.	
		$scope.search = function(username){
			 if (myOtherFunction("param1Value")){
				// …
			}
		};

		$scope.username = "…whatever value";
		$scope.message = "";
		myFunction("param1", "param2");
	};

	// Register the controller in the module
	app.controller("MainController", MainController);
}());
