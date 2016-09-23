'use strict';
(function () {
   angular
       .module('controllers', [])
       .controller('DashBoardController',DashBoardController);
    DashBoardController.$inject = [
        '$scope','dashboardService', '$rootScope', '$uibModal', '$q'
    ];
    function DashBoardController($scope, dashboardService, $rootScope, $uibModal, $q) {

        var dc = this;
        dc.allStatus =  ['OPENED','INPROGRESS','COMPLETED','INVALID'];
        dc.allPriority =  ['LOW','MEDIUM','HIGH'];

       /* dc.allStatus =  [
            {statusName: 'OPENED'},{statusName: 'INPROGRESS'},{statusName: 'COMPLETED'},{statusName: 'INVALID'}
        ];*/
        dc.loadAllTask = loadAllTask;
        /*dc.selectedStatus = '';*/
        dc.taskStatus = '';
        dc.taskPriority = '';
        dc.openAddNewTaskModal = openAddNewTaskModal;

        loadAllTask();

        function loadAllTask() {
            var getAllTask = dashboardService.readTask();
            getAllTask.then(function (data) {
                $rootScope.ALL_TASKS = data.data;
            },function (err) {
                console.log(err);
            });
        }
        
        function openAddNewTaskModal() {
            console.log("Inside popup");
            var uibModalInstance = $uibModal.open({
                templateUrl: '/app/partials/dashboard.add.task.template.html',
                controller: function ($scope,$uibModalInstance) {
                    $scope.closePopup = closePopup;
                    $scope.addTask = addTask;
                    $scope.resetForm = resetForm;
                    $scope.allStatus = ['OPEN', 'INPROGRESS', 'COMPLETED', 'INVALID'];
                    $scope.allPriority =  ['LOW','MEDIUM','HIGH'];
                    function closePopup() {
                        $uibModalInstance.dismiss('cancel');
                    }
                    function addTask(task, form) {
                        console.log("Inside add task.....");
                        console.log(task);
                        console.log(form.$valid)
                        if(form.$valid) {
                            var t = dashboardService.createTask(task);
                            //$rootScope.ALL_TASKS.push(task);
                            console.log("create task function returns -");
                            console.log(t);
                            if(t) {
                                $uibModalInstance.close();
                            }
                        }
                    }
                    function resetForm(form) {
                        if (form) {
                            form.$setPristine();
                            form.$setUntouched();
                        }
                        $scope.task = '';
                    }
                }
            });
        }

    }
}());