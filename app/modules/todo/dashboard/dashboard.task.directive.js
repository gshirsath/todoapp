'use strict';
(function () {
    angular
        .module('dashboard.task.directives',[])
        .directive('renderDashboardTask',dashboardTask);
    dashboardTask.$inject = ['dashboardService','$uibModal'];

    function dashboardTask(dashboardService,$uibModal) {
        function link(scop, element, attr) {
            scop.openDeleteModal = openDeleteModal;
            scop.markTaskAsComplete = markTaskAsComplete;

            function markTaskAsComplete(taskInfo) {
                var task = dashboardService.markTaskAsComplete(taskInfo);
                console.log(task);
            }
            function openDeleteModal(taskInfo) {
                var uibModalInstance = $uibModal.open({
                    templateUrl: '/app/partials/dashboard.delete.task.template.html',
                    controller: function ($scope,$uibModalInstance) {
                        $scope.taskInfo = taskInfo;
                        $scope.closePopup = function () {
                            $uibModalInstance.dismiss('cancel');
                        }
                        $scope.deleteTask = function (taskInfo) {
                            dashboardService.removeTask(taskInfo.name);
                            $uibModalInstance.dismiss();
                        }
                    }
                });
            }

        }
        return {
            restrict: 'E',
            scope: {
                taskInfo: '=task'
            },
            templateUrl: '/app/partials/task.html',
            controllerAs: 'dc',
            link: link
        };
    }

}());
