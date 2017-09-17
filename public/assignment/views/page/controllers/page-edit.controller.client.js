(function () {
    angular
        .module("WamApp")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location, $rootScope) {
        var model = this;

        //Event handles:
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        var userId =  $routeParams["uid"];
        var websiteId =  $routeParams["wid"];
        var pageId = $routeParams["pid"];

        function init() {
            model.uid = userId;
            model.wid = websiteId;
            model.pages = pageService.findPageByWebsiteId(websiteId);
            var page = Object.assign({}, pageService.findPageById(pageId));
            model.page = page;
            $rootScope.title = "Edit page";
        }
        init();

        function updatePage(page) {
            var _page = pageService.updatePage(pageId, page);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }

        function deletePage() {
            pageService.deletePage(pageId);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }
    }
})();