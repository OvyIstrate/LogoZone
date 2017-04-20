'use strict';

angular.module('app')
  .factory('identitySvc', identitySvc);

  identitySvc.$inject = ['$window', '$http', '$q']

function identitySvc($window, $http, $q) {

  var currentUser;

  var service = {
    currentUser : currentUser,
    isAuthenticated : function(){
      return !!this.currentUser;
    },
    isAuthorized: function(role){
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
  if(!!$window.bootstrappedUser)
    currentUser = !!$window.bootstrappedUser;

  return service;
}
