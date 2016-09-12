'use strict';
(function () {
    angular
        .module('dashboard.customValidation.directives',[])
        .directive('verifyTaskName',verifyTaskName);
    verifyTaskName.$inject = ['$q', '$timeout', '$rootScope'];

    function verifyTaskName($q, $timeout, $rootScope) {
        function link(scop, element, attr, ctrl) {
            var taskNames = [];
            var i;
            for(i=0; i<$rootScope.ALL_TASKS.length; i++) {
                taskNames[i] = $rootScope.ALL_TASKS[i]['name']
            }
            ctrl.$asyncValidators.taskName = taskName;
            function taskName(modelValue, viewValue) {

                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty model valid
                    return $q.reject();
                }

                var def = $q.defer();

                $timeout(function() {
                    // Mock a delayed response
                    if (taskNames.indexOf(modelValue) === -1) {
                        // The username is available
                        def.resolve();
                    } else {
                        def.reject();
                    }

                }, 1000);

                return def.promise;
            };
        }
        return {
            require: 'ngModel',
            restrict: 'A',
            link: link
        };
    }

}());

