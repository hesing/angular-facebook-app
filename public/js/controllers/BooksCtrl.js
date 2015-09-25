angular.module("myApp")
	.controller('BooksCtrl', function($scope, alerting, BookService){
		$scope.books = BookService.query(function(res){
			alerting.addAlert('warning', "Awesome BAby");
		},function(res){
			alerting.addAlert('danger', "Awesome Weeeee");
		});	
	});