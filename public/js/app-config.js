angular.module("myApp")
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state("home", {
				url: "/home",
				controller: "HomeCtrl",
				templateUrl: "views/home.html"
			})
			.state("books", {
				url: "/books",
				controller: "BooksCtrl",
				templateUrl: "views/books.html"
			});

		$urlRouterProvider.otherwise("home");
	});