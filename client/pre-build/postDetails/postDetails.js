angular.module('kargo')
 .config(function ($stateProvider) {
    $stateProvider.state('postDetails', {
        url: '/post/:id',
        templateUrl: '/pre-build/postDetails/postDetails.html',
        controller: 'PostDetailsController',
        resolve: {
            post: function(Posts, $stateParams) {
                return Posts.getSinglePost($stateParams.id);
            }
        }
    });
 });
