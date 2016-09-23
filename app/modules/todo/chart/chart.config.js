/**
 * Created by ganesh on 25/8/16.
 */
'use strict';
(function () {
    angular
        .module('task.charts')
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider','ChartJsProvider'];
    function appConfig($stateProvider, $urlRouterProvider,ChartJsProvider) {
        $urlRouterProvider.otherwise('/charts');
        $stateProvider
            .state('charts',{
                url:'/charts',
                templateUrl: '/app/partials/chart.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            });
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        });
    }

}());
