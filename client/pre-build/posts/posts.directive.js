angular.module('kargo')
 .directive('posts', function () {
    return {
      restrict: 'E',
      templateUrl: '/pre-build/posts/postsDirective.html',
      scope: {
        postId: '=',
        postName: '='
      },
      link: function(scope,element,attr) {
        console.log(scope);
      }
    };
});
