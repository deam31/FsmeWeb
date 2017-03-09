/**
 * 
 */

(function(){

	// Define the module githubViewer
	// Add the routing dependency ngRoute for $routeProvider to work.
	var app = angular.module("githubViewer", ["ngRoute"]);

	// Register configuration functions inside our application.
	// Define our routing configuration and view layout.
	app.config(function($routeProvider){
		$routeProvider.
			when("/body1", { // What's the URL looks like.
			templateUrl: "components/main/body1.html", // Will be load up by Angular
			controller: "MainController" // Optional. Controller to manage that template
			})
			.otherwise({redirectTo:"/body1"}); // for unknown URLs
	});
	
}());
