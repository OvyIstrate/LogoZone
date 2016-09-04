'use strict';

angular.module('app')
  .factory('identitySvc', identitySvc);

  identitySvc.$inject = ['$window', '$http', '$q']

function identitySvc($window, $http, $q) {

  var callCount = 0;

  var currentUser;
  if(!!$window.bootstrappedUser)
    currentUser = !!$window.bootstrappedUser;

  var service = {
    currentUser : currentUser,
    isAuthenticated : function(){
      return !!this.currentUser;
    },
    getCurrentUser: function(){
      var defered = $q.defer();
      $http.get('/user').then(function(response){
        currentUser = response.data;
        defered.resolve(currentUser);

      });
      return defered.promise;
    }
  };
  return service;
}
