app.config(function ($stateProvider) {
    $stateProvider.state('posts', {
        url: '/',
        templateUrl: '/pre-build/posts/posts.html',
        controller: 'PostsController'
    });
});
