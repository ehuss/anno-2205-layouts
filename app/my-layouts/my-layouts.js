'use strict';

angular.module('anno2205Layouts.my-layouts', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/my-layouts', {
        templateUrl: 'my-layouts/my-layouts.html',
        controller: 'MyLayoutsCtrl'
    });
}])

.controller('MyLayoutsCtrl', ['$rootScope', '$scope', '$location', '$localStorage',
    function($rootScope, $scope, $location, $localStorage) {
    // TODO: keep this state sticky somehow?
    $scope.region = 'earth';
    $scope.$location = $location;

    $scope.createNewLayout = function(newLayoutName) {
        if (newLayoutName) {
            var newLayout = $scope.layouts.createLayout(newLayoutName, $scope.region);
            /* Handling a location change and dismissing the modal is
            frustratingly difficult.  Can't just immediately call
            $location.path() because that destroys the DOM preventing the
            modal's animation from finishing (leaving a dark-gray background).
            Can't just call $location.path() inside the event handler, because there
            is some insanity about it not being within the Angular context (must
            use $scope.$apply).

            See also: http://stackoverflow.com/questions/11519660/twitter-bootstrap-modal-backdrop-doesnt-disappear

            Solving most of this by removing the "fade" animation from the modal.
            */

            $("#new-layout-modal").modal("hide");
            $location.path("/editor/"+newLayout.id);

            /*
            $('#new-layout-modal').modal('hide').on('hidden.bs.modal', function() {
                $scope.$apply(function() {
                    $location.path('/editor/'+newLayout.id);
                });
            });
            */
            // $location.path('/editor/'+newLayout.id);
        }
    };
}]);

