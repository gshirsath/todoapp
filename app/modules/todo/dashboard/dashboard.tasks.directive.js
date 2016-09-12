'use strict';
(function () {
    angular
        .module('dashboard.tasks.directives',[])
        .directive('renderDashboardTasks',dashboardTasks);
    dashboardTasks.$inject = ['dashboardService'];

    function dashboardTasks(dashboardService) {

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/app/partials/tasks.html'
        };
    }
}());
