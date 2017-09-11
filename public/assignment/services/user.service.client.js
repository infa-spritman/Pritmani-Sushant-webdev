(function () {
    angular
        .module('WamApp')
        .factory('userService', userService)

    function userService() {
        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
        ];

        var api = {
            findUserById: findUserById
        }

        return api

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