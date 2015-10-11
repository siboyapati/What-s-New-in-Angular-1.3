/**
 * Created by Deb on 10/16/2014.
 * Async validator
 */
(function () {
    "use strict";

    angular
        .module("common.directives")
        .directive("duplicateClassNameValidator",
                    ["$q",
                     "classResource",
                     duplicateClassNameValidator]);

    function duplicateClassNameValidator($q, classResource) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                var classId = attrs.duplicateClassNameValidator;

                ngModel.$asyncValidators.duplicateClassName = function (modelValue) {
                    var defer = $q.defer();

                    classResource.get({ classId: classId, className: modelValue },
                        function (response) {
                            // Found a row
                            defer.reject("Exists");
                            },
                        function (response) {
                            // Did not find a row
                            defer.resolve();
                        }
                    );
                    return defer.promise;
                }
            }
        }
    }

}());