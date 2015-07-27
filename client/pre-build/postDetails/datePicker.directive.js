angular.module('kargo')
 .directive('datePicker', function (Analytics) {
    return {
      restrict: 'E',
      templateUrl: '/pre-build/postDetails/datePicker.html',
      link: function(scope,element, attr) {
        scope.pickDate = function() {
          // to get value of date picker directive
          scope.date1 = document.getElementsByTagName('input')[0].value;
          scope.date2 = document.getElementsByTagName('input')[1].value;
          Analytics.getDateRange(scope.date1, scope.date2).then(function(trackerData) {
            scope.data = trackerData;
          });
        };
      }
    };
});
