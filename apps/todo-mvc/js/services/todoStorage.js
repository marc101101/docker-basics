/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('todomvc')
	.factory('todoStorage', todoStorage);

  todoStorage.$inject = ['$http'];
  function todoStorage($http) {
    'use strict';

    // var api = 'localhost';
    var api = 'http://192.168.99.100:8080/api';

    return {
      get: function () {
        return $http.get(api + '/todos').then(function(response) {          
          return angular.fromJson(response.data.todos);
        });
      },

      put: function (todos) {
        console.log({todos: angular.toJson(todos)});
        return $http
          .post(api + '/todos', {todos: angular.toJson(todos)})
          .catch(console.log);
      }
    };
  }
