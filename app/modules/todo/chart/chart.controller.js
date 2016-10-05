'use strict';
(function () {
    angular
        .module('chart.controllers',[])
        .controller('ChartController',ChartController);
    ChartController.$inject = [
        '$scope','chartService', '$rootScope', '$q', '$translate', '$location', '$stateParams'
    ];

    function ChartController($scope, chartService, $rootScope, $q, $translate,$location,$stateParams) {
        var cc =  this;
        cc.isActiveMenu = isActiveMenu;

        var opened = chartService.getAllTasksForOpen();
        var inpro = chartService.getAllTasksForInprogress();
        var completed = chartService.getAllTasksForCompleted();
        var invalid = chartService.getAllTasksForIvalid();
        var x = opened[0]; var y =inpro[0]; var z = completed[0]; var a = invalid[0];

        var allPriority = chartService.getAllTaskPriorityCount();
        cc.tskStatus = $stateParams.selectedTaskStatus ? $stateParams.selectedTaskStatus.name: 'All';

        var selectedTask = chartService.getSelectedTaskPriorityCount($stateParams.selectedTaskStatus ? $stateParams.selectedTaskStatus.name: false,$stateParams.selectedTaskPriority);
        
        cc.selectedTaskPieChartparams = {
            pieChartOptions: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#B19BD6','#e4a91d','#444fa2'],
            data : [selectedTask[1], selectedTask[2], selectedTask[3]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']
        };
        
        cc.barChartParams = {
            labelsForBarChart : [['OPEN'], ['INPROGRESS'], ['COMPLETED'], ['INVALID']],
            dataForBarChart :
                [ opened[0],  inpro[0], completed[0], invalid[0] ],
            series: ['Tasks'],
            options: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                barShowStroke : false
            }
        };

        cc.barChartParams2 = {
            labelsForBarChart : [ ['Open'], ['In-Progress'], ['Completed'], ['Invalid'] ],
            dataForBarChart : [
                [ opened[1],inpro[1],completed[1],invalid[1] ],
                [ opened[2], inpro[2], completed[2], invalid[2] ],
                [  opened[3],inpro[3],completed[3],invalid[3] ]
            ],
            series: ['Low','Mediun','High'],
            colours : [{fillColor:['#949FB1','#e4a91d','#444fa2','#de0000']}],
            options: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                barShowStroke : false
            }
        };

        cc.pieChartparams = {
            pieChartOptions: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#B19BD6','#e4a91d','#444fa2'],
            dataForPieChart : [allPriority[0], allPriority[1], allPriority[2]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']
            
        };

        cc.openPieChartparams = {
            pieChartOptions: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#de0000','#E2ECD1','#444fa2'],
            dataForPieChartOpen : [opened[1], opened[2], opened[3]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']

        };

        cc.inproPieChartparams = {
            pieChartOptions: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#de0000','#e4a91d','#778174'],
            dataForPieChartInpro : [inpro[1], inpro[2], inpro[3]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']

        };

        cc.completedPieChartparams = {
            options: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#de0000','#e4a91d','#444fa2'],
            data : [completed[1], completed[2], completed[3]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']

        };

        cc.invalidPieChartparams = {
            options: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            colours: ['#444fa2','#e4a91d','#26569B'],
            data : [invalid[1], invalid[2], invalid[3]],
            labelsForPieChart : ['LOW','MEDIUM','HIGH']

        };

        function isActiveMenu(viewLocation) {
            var activeClass = ($location.path().indexOf(viewLocation) > -1);
            return activeClass;
        };
    }

}());