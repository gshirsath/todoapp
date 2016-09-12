'use strict';
(function () {
    angular
        .module('services',[]);
    angular
        .module('services')
        .factory('dashboardService', dashboardService);
    dashboardService.$inject = ['$http','$q','$rootScope'];
    function dashboardService($http, $q, $rootScope) {


        var service = {
            readTask: readTask,
            createTask: createTask,
            removeTask: removeTask,
            markTaskAsComplete: markTaskAsComplete
        };
        return service;

        function readTask() {
            var deferred = $q.defer();
            $http.get('app/tasks.json').then(function (data) {
                deferred.resolve(data);
            }, function (error){
                deferred.reject(error);
            });
            /*return $http.get('app/tasks.json').success(function (response) {
                return response;
            });*/
            return deferred.promise;
        }

        function createTask(task) {
            if(task) {
                $rootScope.ALL_TASKS.push(task);  
            }
            return task;
        }

        function removeTask(taskName){
            var i;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if(taskName == $rootScope.ALL_TASKS[i].name) {
                    $rootScope.ALL_TASKS.splice(i, 1);
                }
            }
        }

        function markTaskAsComplete(taskInfo) {
            if(taskInfo.status && taskInfo.status != "COMPLETED") {
                taskInfo.status = "COMPLETED";
            }
            return taskInfo;
        }
        
    }
}());