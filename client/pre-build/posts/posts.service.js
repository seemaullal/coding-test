angular.module('kargo')
  .factory('Posts', function ($http) {

    function getPosts() {
        return $http.get('http://jsonplaceholder.typicode.com/posts').then(function(response) {
            return response.data;
        })
    }
    return {
      getPosts : getPosts
    };
  });
