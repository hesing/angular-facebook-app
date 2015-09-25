angular.module("myApp")
    .controller('HomeCtrl', function($scope, $facebook, alerting) {
        $scope.isLoggedIn = false;
        $scope.formData = {};

        $scope.login = function() {
            $facebook.login().then(function() {
                refresh();
            });
        };

        $scope.logout = function() {
            $facebook.logout().then(function() {
                refresh();
            });
        };

        $scope.postMessage = function(){
            $facebook.api("/me/feed", "post", { message: $scope.formData.post }).then(
                function(response) {
                    alerting.addAlert('success', "Thanks for posting");
                    $scope.formData = {};
                    refresh();
                });        
        };

        $scope.removePost = function(post){console.log(post);
            $facebook.api("/"+post.id, "DELETE").then(
                function(response) {
                    alerting.addAlert('warning', "Post deleted!");
                    refresh();
                });        
        };

        function refresh() {
            $facebook.api("/me").then(
                function(response) {
                    $scope.welcomeMsg = response.name;
                    $scope.isLoggedIn = true;
                    $scope.userInfo = response;
                },
                function(err) {
                    $scope.isLoggedIn = false;
                    alerting.addAlert('warning', "Please login to post on facebook!");
                });

            $facebook.api("/me/picture").then(
                function(response) {
                    $scope.picture = response.data.url;
                });

            $facebook.api("/me/permissions").then(
                function(response) {
                    $scope.permissions = response.data;
                });

            $facebook.api("/me/posts").then(
                function(response) {
                    console.log(response);
                    $scope.posts = response.data;
                });

        }

        refresh();
    });
