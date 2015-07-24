angular.module('kargo')
  .factory('Posts', function ($http) {
    var factory = { };
    factory.getPosts = function() {
        return $http.get('http://jsonplaceholder.typicode.com/posts').then(function(response) {
            return response.data;
        });
    };

    factory.getSinglePost = function(id) {
        return $http.get('http://jsonplaceholder.typicode.com/posts/' + id).then(function(response) {
            return response.data;
        });
    }

    return factory;
  });
