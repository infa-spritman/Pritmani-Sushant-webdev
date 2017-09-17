(function () {
    angular
        .module('WamApp')
        .controller('websiteListController',websiteListController)

    function websiteListController($routeParams,websiteService,$rootScope) {

        var model = this

        var userId = $routeParams['uid'];

        function init() {
            model.uid = userId;
            model.websites = websiteService.findWebsitesByUser(userId);
            $rootScope.title ="Websites List"

        }
        init();
    }
})();