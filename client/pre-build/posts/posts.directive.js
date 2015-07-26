angular.module('kargo')
 .directive('postDir', function () {
    return {
      restrict: 'E',
      templateUrl: '/pre-build/posts/postsDirective.html',
      scope: {
        postId: '=',
        postName: '='
      },
      transclude: true,
      link: function(scope,element,attr) {
        console.log(scope);
      }
    };
});
