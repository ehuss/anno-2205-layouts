'use strict';

angular.module('anno2205Layouts', [
    'ngRoute',
    'ngStorage',
    'anno2205Layouts.my-layouts',
    'anno2205Layouts.editor'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    Anno2205Layouts.initBuildings();
    $routeProvider.otherwise({redirectTo: '/my-layouts'});
    // $locationProvider.html5Mode(true);
}])

.run(['$rootScope', '$localStorage', function($rootScope, $localStorage) {
    $rootScope.layouts = new Anno2205Layouts.Layouts($localStorage);
}]);
