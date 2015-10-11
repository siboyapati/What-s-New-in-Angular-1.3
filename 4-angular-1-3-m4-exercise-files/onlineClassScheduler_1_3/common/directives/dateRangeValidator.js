/**
 * Created by Deb on 10/16/2014.
 * Custom Validator
 */
(function () {
    "use strict";

    angular
        .module("common.directives")
        .directive("dateRangeValidator",
                    [dateRangeValidator]);

    function dateRangeValidator() {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                // Prefix "=" => two-way binding
                beginDate: "=dateRangeValidator"
            },
            link: function (scope, element, attrs, ngModel) {
                ngModel.$validators.dateRange = function (modelValue) {
                    return Date.parse(modelValue) >= Date.parse(scope.beginDate);
                };

                // Automatically watches the end date.
                // Add a watch for the begin date as well.
                scope.$watch("beginDate", function () {
                    ngModel.$validate();
                });
            }
        }
    }

}());