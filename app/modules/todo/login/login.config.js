'use strict';
(function () {
    angular
        .module('login')
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('welcome',{
                url:'/',
                templateUrl: '/app/partials/welcome.html'
            })
            .state('signin',{
                url:'/login',
                templateUrl: '/login.html',
                controller: 'LoginController',
                controllerAs: 'lc'
            });
        $locationProvider.html5Mode(true);
    }

}());