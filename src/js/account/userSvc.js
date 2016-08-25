'use strict';

angular
  .module('app')
  .factory('userSvc', userSvc);

  userSvc.$inject = ['$http'];

function userSvc($http) {

  this.getCurrentUser = getCurrentUser;
  this.currentUser = undefined;

  function getCurrentUser() {
      $http.get('/user').then(function(response){
        this.currentUser = response.data;
        console.log(this.currentUser);

      });
  }

  return this;
}
