angular.module('kargo')
  .factory('Posts', function ($http) {
    var factory = { };
    factory.getPosts = function() {
        return $http.get('/api/posts').then(function(response) {
            return response.data;
        });
    };

    factory.getSinglePost = function(id) {
        return $http.get('/api/posts/' + id).then(function(response) {
            return response.data;
        });
    };

    return factory;
  });
