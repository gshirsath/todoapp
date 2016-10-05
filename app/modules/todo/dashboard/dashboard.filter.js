'use strict';
(function () {
    angular
        .module('dashboard.filters', []);
        
    angular
        .module('dashboard.filters')
        .filter('filterWithOr', filterWithOr);
    angular
        .module('dashboard.filters')
        .filter('propsFilter', propsFilter);
    filterWithOr.$inject = ['$filter'];


    function filterWithOr($filter) {

       /* if(actual != null ) {*/
            var comparator = function (actual, expected) {

                if (angular.isUndefined(actual)) {
                    // No substring matching against `undefined`
                    return false;
                }
                if ((actual === null) || (expected === null)) {
                    // No substring matching against `null`; only match against `null`
                    return actual === expected;
                }
                if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
                    // Should not compare primitives against objects, unless they have custom `toString` method
                    return false;
                }

                actual = angular.lowercase('' + actual);
                if (angular.isArray(expected)) {
                    var match = false;
                    expected.forEach(function (e) {
                        e = angular.lowercase('' + e);
                        if (actual.indexOf(e) !== -1) {
                            match = true;
                        }
                    });
                    return match;
                } else {
                    expected = angular.lowercase('' + expected);
                    return actual.indexOf(expected) !== -1;
                }
            };
            return function (campaigns, filters) {
                /*if(filters['status'] !=null || filters['priority']!= undefined) {*/
                    return $filter('filter')(campaigns, filters, comparator);
                /*} else {
                    return campaigns;
                }*/
            };

        /*} else  {
            return '';
        }*/
    }

    function propsFilter() {
        return function(items, props) {
            var out = [];

            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }

            return out;
        };
    };
    
}());



