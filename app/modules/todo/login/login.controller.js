'use strict';
(function () {
    angular
        .module('login.controllers', [])
        .controller('LoginController',LoginController);
    LoginController.$inject = [
        '$scope', '$rootScope','$state', '$stateParams', '$location', '$q', '$timeout', '$uibModal', 'loginService'
    ];
    function LoginController($scope, $rootScope, $state, $stateParams, $location, $q, $timeout, $uibModal, loginService) {

        var lc = this;
        lc.logOut = logOut;
        lc.loginModal = loginModal;
        $rootScope.logedIn = false;

        function logOut() {
            console.log("inside logout");
            if($rootScope.logedIn) {
                console.log("inside logout true");
                $rootScope.logedIn = false;
                $rootScope.userRole = '';
                $rootScope.accessLevel = '';
                $location.path('/');
            }
            else {
                alert('You already logout....');
            }
        }

        function loginModal() {
            console.log("Inside popup");
            var uibModalInstance = $uibModal.open({
                templateUrl: '/login.html',
                controller: function ($scope,$uibModalInstance) {
                    $scope.closeLoginModal = closeLoginModal;
                    $scope.login = login;
                    function closeLoginModal() {
                        $uibModalInstance.dismiss('cancel');
                    }
                    function login() {
                        if($scope.uname == 'admin' && $scope.pwd == 'admin') {
                            $rootScope.logedIn = true;
                            $rootScope.userRole = loginService.currentUserRole($scope.uname);
                            $rootScope.accessLevel = loginService.currentUserAccessLevel($scope.uname);
                            $location.path('/dashboard');
                            $uibModalInstance.close();
                        }
                        else if($scope.uname == 'user' && $scope.pwd == 'user') {
                            $rootScope.logedIn = true;
                            $rootScope.userRole = loginService.currentUserRole($scope.uname);
                            $rootScope.accessLevel = loginService.currentUserAccessLevel($scope.uname);
                            $location.path('/dashboard');
                            $uibModalInstance.close();
                        }
                        else if($scope.uname == 'guest' && $scope.pwd == 'guest') {
                            $rootScope.logedIn = true;
                            /*$rootScope.userRole = $rootScope.userRoles.guest;
                            $rootScope.accessLevel = $rootScope.accessLevels.guest;*/
                            $rootScope.userRole = loginService.currentUserRole($scope.uname);
                            $rootScope.accessLevel = loginService.currentUserAccessLevel($scope.uname);
                            $location.path('/dashboard');
                            $uibModalInstance.close();
                        }
                        else {
                            alert('Wrong details.....');
                            console.log("Wrong details.....");
                            $rootScope.userRole = "";
                            $rootScope.accessLevel = "";
                            $rootScope.logedIn = false;
                        }
                    }

                }
            });
        }

    }
}());