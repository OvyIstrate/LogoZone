'use strict';

angular.module('app')
  .factory('identitySvc', identitySvc);

  identitySvc.$inject = ['$window']

function identitySvc($window) {

  var currentUser;
  if(!!$window.bootstrappedUser)
    currentUser = !!$window.bootstrappedUser;

  var service = {
    currentUser : currentUser,
    isAuthenticated : function(){
      return !!this.currentUser;
    }
  };
  return service;
}
