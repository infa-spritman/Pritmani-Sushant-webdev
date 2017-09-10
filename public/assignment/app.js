// App name and second argument is dependencies / config fn
(function () {
    angular.module('WamApp', ['ngRoute'])
        .config(configuration);

    // what are you configuring + Provider (always ends with provider)
    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when('/login', {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"})
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
               })
    }

})();