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
            .state('showcharts',{
                url:'/calculated-charts',
                params: {selectedTaskStatus: null,selectedTaskPriority:null},
                templateUrl: '/app/partials/calculated-charts.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts',{
                url:'/charts',
                templateUrl: '/app/partials/chart.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.barchart',{
                url:'/barcharts',
                templateUrl: '/app/partials/bar.chart.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.barchartpriority',{
                url:'/alltaskbypriority',
                templateUrl: '/app/partials/bar.chart.priority.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.piechart',{
                url:'/piechart',
                templateUrl: '/app/partials/pie.chart.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.open-task-piechart',{
                url:'/open-task-pie-chart',
                templateUrl: '/app/partials/pie-chart-open-task.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.inprogress-task-piechart',{
                url:'/inprogress-task-pie-chart',
                templateUrl: '/app/partials/pie-chart-progress-task.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.completed-task-piechart',{
                url:'/completed-task-pie-chart',
                templateUrl: '/app/partials/pie-chart-completed-task.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('charts.invalid-task-piechart',{
                url:'/invalid-task-pie-chart',
                templateUrl: '/app/partials/pie-chart-invalid-task.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
            .state('all-charts',{
                url:'/all-charts',
                templateUrl: '/app/partials/all.charts.html',
                controller: 'ChartController',
                controllerAs: 'cc'
            })
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        });
    }

}());
