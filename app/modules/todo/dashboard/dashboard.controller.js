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
        /*dc.allStatus =  ['OPENED','INPROGRESS','COMPLETED','INVALID'];*/
        dc.allPriority =  ['LOW','MEDIUM','HIGH'];
        dc.loadAllTask = loadAllTask;
        /*dc.selectedStatus = '';*/
        dc.taskstatus = {};
        dc.taskPriority = '';
        dc.allStatus =  [
            {name: 'OPENED', val: 'OPENED'},
            {name: 'INPROGRESS',val: 'INPROGRESS'},
            {name: 'COMPLETED',val: 'COMPLETED'},
            {name: 'INVALID',val: 'INVALID'},
            {name: 'ALL',val: null}
        ];
        dc.openAddNewTaskModal = openAddNewTaskModal;

        /*loadAllTask();*/

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
                    $scope.allStatus = ['OPENED', 'INPROGRESS', 'COMPLETED', 'INVALID'];
                    $scope.allPriority =  ['LOW','MEDIUM','HIGH'];
                    function closePopup() {
                        $uibModalInstance.dismiss('cancel');
                    }
                    function addTask(task, form) {
                        console.log("Inside add task.....");
                        console.log(task);
                        console.log(form.$valid)
                        if(form.$valid) {
                            var taskCreated = dashboardService.createTask(task);
                            //$rootScope.ALL_TASKS.push(task);
                            console.log("create task function returns -");
                            console.log(taskCreated);
                            if(taskCreated) {
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