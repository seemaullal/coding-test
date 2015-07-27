angular.module('kargo')
 .controller('PostDetailsController', function($scope, post) {
    $scope.post = post;
    $scope.header = {
        monday: 'Mon',
        tuesday: 'Tues',
        wednesday: 'Wed',
        thursday: 'Thurs',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun'
    };

    $scope.arrows = {
        year: {
            left: '/material-date-picker/example/images/white_arrow_left.svg',
            right: '/material-date-picker/example/images/white_arrow_right.svg'
        },
        month: {
            left: '/material-date-picker/example/images/grey_arrow_left.svg',
            right: '/material-date-picker/example/images/grey_arrow_right.svg'
        }
    };

 });
