// App name and second argument is dependencies / config fn
(function () {
    angular.module('WamApp', ['ngRoute'])
        .config(configuration);

    // what are you configuring + Provider (always ends with provider)
    function configuration($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html'
            })
    }

})();