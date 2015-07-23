angular.module('learndotApp')
 .directive('postsDirective', function () {
    return {
      restrict: 'E',
      templateUrl: '/pre-build/posts/postsDirective.html',
      scope: {
        postTitle: '=',
        postName: '='
      }
    };
});
