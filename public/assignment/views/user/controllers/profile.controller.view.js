(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($location, $routeParams) {
        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];
        var model = this;

        var userID = $routeParams['uid']
        // Event Handlers
        model.user = findUserById(userID);

        // Functions to implement

        function findUserById(userID) {
            for (var u in users) {
                if (users[u]._id === userID) {
                    console.log("Matched")
                    return users[u];

                }

            }
            return null;
        }
    }
})();