'use strict';
(function () {
    angular
        .module('chart.services',[])
        .factory('chartService', chartService);
    chartService.$inject = ['$rootScope'];

    function chartService($rootScope) {
        var service = {
            getAllTasksByStatus: getAllTasksByStatus,
            getAllTasksForCompleted: getAllTasksForCompleted,
            getAllTasksForOpen: getAllTasksForOpen,
            getAllTasksForInprogress: getAllTasksForInprogress,
            getAllTasksForIvalid: getAllTasksForIvalid,
            getAllTaskPriorityCount: getAllTaskPriorityCount
        }
        return service;

        function getAllTasksForCompleted() {
            var completedTasks = [];
            var i;
            var count = 0, compLowPrio = 0,compMidPrio = 0, compHighPrio = 0;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "COMPLETED") {
                    completedTasks[i] = $rootScope.ALL_TASKS[i];
                    count++;
                    if($rootScope.ALL_TASKS[i].priority == "LOW") {
                        compLowPrio++;
                    }
                    else if($rootScope.ALL_TASKS[i].priority == "MEDIUM") {
                        compMidPrio++;
                    } else {
                        compHighPrio++;
                    }
                }
            }
            console.log("Comleted : -");
            console.log(completedTasks.length);
            //return completedTasks;
            return [count,compLowPrio,compMidPrio,compHighPrio ];
        }
        function getAllTasksForIvalid() {
            var invalidTasks = [];
            var i;
            var count = 0, invalLowPrio = 0, invalMidPrio = 0, invalHighPrio = 0;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "INVALID") {
                    invalidTasks[i] = $rootScope.ALL_TASKS[i];
                    console.log($rootScope.ALL_TASKS[i].status );
                    count++;
                    if($rootScope.ALL_TASKS[i].priority == "LOW") {
                        invalLowPrio++;
                    }
                    else if($rootScope.ALL_TASKS[i].priority == "MEDIUM") {
                        invalMidPrio++;
                    } else {
                        invalHighPrio++;
                    }
                }
            }
            console.log("Invalid : -");
            console.log(invalidTasks.length);
            //return invalidTasks;
            return [count,invalLowPrio,invalMidPrio,invalHighPrio ];
        }

        function getAllTasksForInprogress() {
            var inProTasks = [];
            var i;
            var count = 0, inproLowPrio = 0, inproMidPrio = 0, inproHighPrio = 0;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "INPROGRESS") {
                    inProTasks[i] = $rootScope.ALL_TASKS[i];
                    count++;
                    if($rootScope.ALL_TASKS[i].priority == "LOW") {
                        inproLowPrio++;
                    }
                    else if($rootScope.ALL_TASKS[i].priority == "MEDIUM") {
                        inproMidPrio++;
                    } else {
                        inproHighPrio++;
                    }
                }
            }
            console.log("Inprogress : -");
            console.log(inProTasks.length);
            //return inProTasks;
            return [count,inproLowPrio,inproMidPrio,inproHighPrio];
        }

        function getAllTasksForOpen() {
            var openTasks = [];
            var i;
            var count = 0, openLowPrio = 0,openMidPrio = 0, openHighPrio = 0;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "OPENED") {
                    openTasks[i] = $rootScope.ALL_TASKS[i];
                    count++;
                    if($rootScope.ALL_TASKS[i].priority == "LOW") {
                        openLowPrio++;
                    }
                    else if($rootScope.ALL_TASKS[i].priority == "MEDIUM") {
                        openMidPrio++;
                    } else {
                        openHighPrio++;
                    }
                }
            }
            console.log("Open : -");
            console.log(openTasks.length);
            //return openTasks;
            return [count,openLowPrio,openMidPrio,openHighPrio];
        }

        function getAllTaskPriorityCount() {
            var low=0, mid=0, high = 0;
            var i;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                    if($rootScope.ALL_TASKS[i].priority == "LOW") {
                        low++;
                    }
                    else if($rootScope.ALL_TASKS[i].priority == "MEDIUM") {
                        mid++;
                    } else {
                        high++;
                    }
            }
            return [low,mid,high];
        }
        function getAllTasksByStatus() {
            var i;
            var completedTasks = [];
            var openTasks = [];
            var inProTasks = [];
            var invalidTasks = [];
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "OPENED") {
                    openTasks[i] = $rootScope.ALL_TASKS[i];
                }
                if($rootScope.ALL_TASKS[i].status == "INPROGRESS") {
                    inProTasks[i] = $rootScope.ALL_TASKS[i];
                }
                if($rootScope.ALL_TASKS[i].status == "COMPLETED") {
                    completedTasks[i] = $rootScope.ALL_TASKS[i];
                }
                if($rootScope.ALL_TASKS[i].status == "INVALID") {
                    invalidTasks[i] = $rootScope.ALL_TASKS[i];
                    console.log($rootScope.ALL_TASKS[i].status );
                }
            }

            /*return [{"completedTasks":completedTasks}, {"openTasks":openTasks}, {"inProTasks":inProTasks}, {"invalidTasks":invalidTasks}];*/
            return [completedTasks,openTasks,inProTasks,invalidTasks];
        }

    }
}());
