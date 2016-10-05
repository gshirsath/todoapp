'use strict';
(function () {
    
    angular
        .module('todoApp')
        .run(loadAllTaskData);
    
    loadAllTaskData.$inject = [
        '$rootScope','$state', '$stateParams','$location','dashboardService'
    ];
    
    function loadAllTaskData($rootScope,$state,$stateParams,$location,dashboardService) {
        var getAllTask = dashboardService.readTask();
        getAllTask.then(function (data) {
            $rootScope.ALL_TASKS = data.data;
        },function (err) {
            console.log(err);
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $rootScope.ALL_TASKS;
            event.preventDefault();
                if(fromState.url === '^') {
                    if(!$rootScope.logedIn) {
                        console.log("login false");
                        /*$location.path('/');*/
                        $state.go('welcome');
                    } else {
                        console.log("Correct user name config");
                        console.log(toState);
                       /* $location.path('/dashboard');*/
                        $state.go(toState);
                    }
                }
            // after logout restric the back button functionality
            if ((toState.templateUrl !== "/app/partials/login.html" && $rootScope.logedIn=== false)) {
                $location.path("/");
            }
        });

    }
}());
