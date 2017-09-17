(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);

    function registerController($location, $routeParams,userService) {

        var model = this;

       model.register = register;
       
       function register(user) {
           
       }


    }
})();