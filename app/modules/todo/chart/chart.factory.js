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
            getAllTaskPriorityCount: getAllTaskPriorityCount,
            getSelectedTaskPriorityCount: getSelectedTaskPriorityCount
        }
        return service;
        
        function getSelectedTaskPriorityCount(taskStatus, taskPriority) {
            var selectedTask = [];
            var i;
            var count = 0, selectedTaskLowPrio = 0,selectedTaskMidPrio = 0, selectedTaskHighPrio = 0;
            if(taskStatus && taskStatus!='ALL') {
                console.log("TaskStatus - :"+taskStatus);
                for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                    if($rootScope.ALL_TASKS[i].status == taskStatus) {
                        selectedTask[i] = $rootScope.ALL_TASKS[i];
                        count++;
                        if(taskPriority && taskPriority.length > 0) {
                            console.log("task prio length > 0___:");
                            var j;
                            for(j=0; j<taskPriority.length; j++) {
                                if(taskPriority[j] == "LOW"  && $rootScope.ALL_TASKS[i].priority == "LOW") {
                                    selectedTaskLowPrio++;
                                }
                                else if(taskPriority[j] ==  "MEDIUM" && $rootScope.ALL_TASKS[i].priority ==  "MEDIUM") {
                                    selectedTaskMidPrio++;
                                }
                                else if(taskPriority[j] == "HIGH" && $rootScope.ALL_TASKS[i].priority == "HIGH") {
                                    selectedTaskHighPrio++;
                                }
                            }
                            console.log("In If blok");
                            console.log("Low :" + selectedTaskLowPrio);
                            console.log("Mid :" + selectedTaskMidPrio);
                            console.log("High :" + selectedTaskHighPrio);
                        }
                        else {
                            console.log("task prio length < 0___:");
                            if($rootScope.ALL_TASKS[i].priority == "LOW") {
                                selectedTaskLowPrio++;
                            }
                            else if($rootScope.ALL_TASKS[i].priority ==  "MEDIUM") {
                                selectedTaskMidPrio++;
                            }
                            else if($rootScope.ALL_TASKS[i].priority == "HIGH") {
                                selectedTaskHighPrio++;
                            }
                            console.log("In else blok");
                            console.log("Low :" + selectedTaskLowPrio);
                            console.log("Mid :" + selectedTaskMidPrio);
                            console.log("High :" + selectedTaskHighPrio);
                        }
                    }
                }
                return [count,selectedTaskLowPrio,selectedTaskMidPrio,selectedTaskHighPrio ];
            }
            else {
                console.log("TaskStatus in else- :"+taskStatus);
                for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                    /*if($rootScope.ALL_TASKS[i].status == taskStatus) {*/
                        selectedTask[i] = $rootScope.ALL_TASKS[i];
                        count++;
                        if(taskPriority && taskPriority.length > 0) {
                            console.log("task prio length > 0___:");
                            var j;
                            for(j=0; j<taskPriority.length; j++) {
                                if(taskPriority[j] == "LOW"  && $rootScope.ALL_TASKS[i].priority == "LOW") {
                                    selectedTaskLowPrio++;
                                }
                                else if(taskPriority[j] ==  "MEDIUM" && $rootScope.ALL_TASKS[i].priority ==  "MEDIUM") {
                                    selectedTaskMidPrio++;
                                }
                                else if(taskPriority[j] == "HIGH" && $rootScope.ALL_TASKS[i].priority == "HIGH") {
                                    selectedTaskHighPrio++;
                                }
                            }
                            console.log("In If blok");
                            console.log("Low :" + selectedTaskLowPrio);
                            console.log("Mid :" + selectedTaskMidPrio);
                            console.log("High :" + selectedTaskHighPrio);
                        }
                        else {
                            console.log("task prio length < 0___:");
                            if($rootScope.ALL_TASKS[i].priority == "LOW") {
                                selectedTaskLowPrio++;
                            }
                            else if($rootScope.ALL_TASKS[i].priority ==  "MEDIUM") {
                                selectedTaskMidPrio++;
                            }
                            else if($rootScope.ALL_TASKS[i].priority == "HIGH") {
                                selectedTaskHighPrio++;
                            }
                            console.log("In else blok");
                            console.log("Low :" + selectedTaskLowPrio);
                            console.log("Mid :" + selectedTaskMidPrio);
                            console.log("High :" + selectedTaskHighPrio);
                        }
                    /*}*/
                }
                return [count,selectedTaskLowPrio,selectedTaskMidPrio,selectedTaskHighPrio ];

            }
        }

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
            return [count,compLowPrio,compMidPrio,compHighPrio ];
        }
        function getAllTasksForIvalid() {
            var invalidTasks = [];
            var i;
            var count = 0, invalLowPrio = 0, invalMidPrio = 0, invalHighPrio = 0;
            for(i = 0; i<$rootScope.ALL_TASKS.length; i++) {
                if($rootScope.ALL_TASKS[i].status == "INVALID") {
                    invalidTasks[i] = $rootScope.ALL_TASKS[i];
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
                }
            }
            return [completedTasks,openTasks,inProTasks,invalidTasks];
        }

    }
}());
