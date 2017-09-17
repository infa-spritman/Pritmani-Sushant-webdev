(function () {
    angular
        .module("WamApp")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {


        var model = this;
        // Event Handlers
        model.login = login;

        // Functions to implement
        function init() {
            $rootScope.title = "Login";
        }

        init();

        function login(username, password) {
            var found = userService.findUserByCredentials(username, password)

            if (found !== null) {
                // $scope.message = "Welcome " + username
                $rootScope.currentUser = found;
                $location.url("user/" + found._id)
            } else {
                model.errorMessage = "Wrong username or Password.."
            }
        }
    }
})();