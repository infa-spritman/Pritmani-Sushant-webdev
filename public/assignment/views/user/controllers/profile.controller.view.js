(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($location, $routeParams,userService) {

        var model = this;

        var userID = $routeParams['uid']
        // Event Handlers
        model.user = userService.findUserById(userID);

        // Functions to implement


    }
})();