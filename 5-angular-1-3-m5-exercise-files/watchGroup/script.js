// Code goes here

angular.module('app', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/classes', {
    id: 'classes',
    templateUrl: 'classes.html',
    controller: 'classesCtrl'
  }).when('/students', {
    id: 'students',
    templateUrl: 'students.html',
    controller: 'studentsCtrl'
  }).otherwise('/classes')
})

angular.module('app').controller('mainCtrl', function($scope, classes, students) {
  $scope.classes = classes.classList;
  $scope.students = students.studentList;
}); 
angular.module('app').controller('classesCtrl', function($scope) {
  $scope.currentClassIndex = 0;
  $scope.currentClassId = $scope.classes[0].classId;
  $scope.$watchGroup(['currentClassIndex', 'currentClassId'], function(newVals, oldVals) {
    console.log(newVals, oldVals);
    for(var i=0; i < newVals.length; i++) {
      if(newVals[i] !== oldVals[i]) {
        alert('you have changed the current class');
		break;
      }
    }
  })
  
});
angular.module('app').controller('studentsCtrl', function($scope) {
  
});