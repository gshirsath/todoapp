'use strict';
angular.module('todoApp', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'pascalprecht.translate',
    'controllers',
    'services',
    'dashboard.task.directives',
    'dashboard.tasks.directives',
    'dashboard.customValidation.directives',
    'common.directives',
    'ui.select',
    'ngSanitize',
    'task.charts',
    'dashboard.filters',
    'login'
]);