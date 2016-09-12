'use strict';
(function () {
    angular
        .module('controllers')
        .controller('TranslateLangController',TranslateLangController);
    TranslateLangController.$inject = [
        '$scope', '$translate'
    ];
    function TranslateLangController($scope, $translate) {
        var tlc = this;

        tlc.changeLanguage = changeLanguage;
        function changeLanguage(key) {
            $translate.use(key);
        };
    }
}());