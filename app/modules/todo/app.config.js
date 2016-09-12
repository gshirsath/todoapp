/**
 * Created by ganesh on 25/8/16.
 */
'use strict';
(function () {
    angular
        .module('todoApp')
        .config(appConfig);
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider'];
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: '/app/partials/dashboard.html',
                controller: 'DashBoardController',
                controllerAs: 'dc'
            });
        $locationProvider.html5Mode(true);

/*        $translateProvider.translations('en',{
            TITLE: 'TODOApp',
            SUB_TITLE: 'Manage your tasks',
            EN_LANG_TITLE: 'English',
            DE_LANG_TITLE: 'Spanish',
            TASK_BUTTON: 'Add New Task',
            DESC: 'Descriptions :',
            STATUS: 'Status :',
            START_DATE: 'Start Date :',
            END_DATE: 'End Date :',
            PRIO: 'Priority :'
        });
        $translateProvider.translations('es',{
            TITLE: 'Spanish App',
            SUB_TITLE: 'Administrar sus tareas',
            EN_LANG_TITLE: 'English',
            DE_LANG_TITLE: 'Spanish',
            TASK_BUTTON: 'Añadir nueva tarea',
            DESC: 'Descripciones :',
            STATUS: 'Estado :',
            START_DATE: 'Fecha de inicio :',
            END_DATE: 'Fecha final :',
            PRIO: 'Prioridad :'
        });*/
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/messages-',
            suffix:'.json'
        });
        $translateProvider.preferredLanguage('en');
    }

}());