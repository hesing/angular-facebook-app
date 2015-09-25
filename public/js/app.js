angular.module("myApp", ["ui.router", "common", "ngAnimate", "ngResource", "ngFacebook"])
    .config(function($facebookProvider) {
        $facebookProvider.setAppId('524212191069634');
        $facebookProvider.setPermissions("email,public_profile, user_posts, publish_actions, user_photos, user_likes");
    })

.run(function($rootScope) {
    // Cut and paste the "Load the SDK" code from the facebook javascript sdk page.


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

});
