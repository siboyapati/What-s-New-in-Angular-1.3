/**
 * Created by Deb on 8/26/2014.
 */
(function () {
    "use strict";

    angular
        .module("onlineClassScheduler")
        .controller("ClassEditCtrl",
        ["selectedClass",
            "$location",
            ClassEditCtrl]);

    function ClassEditCtrl(selectedClass, $location) {
        var vm = this;

        vm.class = selectedClass;
        vm.title = "";

        vm.class.startDate = new Date(vm.class.startDate);
        vm.class.endDate = new Date(vm.class.endDate);

        vm.fields = [
            {label:"Custom Field 1",data:"test 1"},
            {label:"Custom Field 2",data:"test 2"},
            {label:"Custom Field 3",data:"test 3"}
        ];

        if (vm.class && vm.class.classId) {
            vm.title = "Edit: " + vm.class.className;
        }
        else {
            vm.title = "New Class";
        }

        vm.submit = function (isValid) {
            if (isValid) {
                vm.class.$save();
                $location.path("/classList");
            } else {
                $window.alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $location.path("/classList");
        };
    }
}());
