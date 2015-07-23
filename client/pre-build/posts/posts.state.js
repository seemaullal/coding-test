angular.module('kargo')
 .config(function ($stateProvider) {
    $stateProvider.state('posts', {
        url: '/',
        templateUrl: '/pre-build/posts/posts.html',
        controller: 'PostsController',
        resolve: {
            posts: function(Posts) {
                return Posts.getPosts();
            }
        }
    });
 });
