'use strict';
(function () {
    angular
        .module('login.services',[])
        .factory('loginService', loginService);
    loginService.$inject = ['$rootScope'];

    function loginService($rootScope) {
        var service = {
            getUserRoles: getUserRoles,
            getAccessLevels: getAccessLevels,
            currentUserRole: currentUserRole,
            currentUserAccessLevel: currentUserAccessLevel
        }
        return service;
        
        function currentUserRole(loginUser) {
            var userRole;
            if(loginUser === 'admin') {
                userRole = getUserRoles().admin;
            } 
            else if(loginUser=== 'user') {
                userRole = getUserRoles().user;
            }
            else if(loginUser=== 'guest') {
                userRole = getUserRoles().guest; 
            } 
            else {
                userRole = 'Invalid User';
                console.log(userRole);
            }
            console.log("Current User User Role:");
            console.log(userRole);
            return userRole
        }
        
        function currentUserAccessLevel(loginUser) {
            var accessLevel;
            if(loginUser === 'admin') {
                accessLevel = getAccessLevels().admin;
            }
            else if(loginUser=== 'user') {
                accessLevel = getAccessLevels().user;
            }
            else if(loginUser=== 'guest') {
                accessLevel = getAccessLevels().guest;
            }
            else {
                accessLevel = 'Access level not founf. Invalid User..';
                console.log(accessLevel);
            }
            console.log("Current User Access Level:");
            console.log(accessLevel);
            return accessLevel;
        }

        function getUserRoles() {
            var userRoles = {
                guest: 1,
                user:   2,
                admin:  4
            };
            console.log("User Roles___:");
            console.log(userRoles);
            return userRoles;
        }
        
        function getAccessLevels() {
            var accessLevels = {
                public: getUserRoles().guest |
                getUserRoles().user   |
                getUserRoles().admin,
                guest:   getUserRoles().guest,
                user:   getUserRoles().user |
                getUserRoles().admin,
                admin:  getUserRoles().admin
            };
            console.log("AccessLevels___:");
            console.log(accessLevels);
            return accessLevels;
        }

    }
}());
