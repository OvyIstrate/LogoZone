'use strict';

angular
  .module('app')
  .factory('authSvc', authSvc);

  authSvc.$inject = ['$q', '$http', 'identitySvc'];

function authSvc($q, $http, identitySvc) {
  var service = {

    authenticateUser: function(username, password){
      var defered = $q.defer();
      $http.post('/login', {username: username, password:password}).then(function(response){
        if(response.data.success){
          identitySvc.currentUser = response.data.user;
          defered.resolve(true);
        }
        else
        {
          defered.resolve(false);
        }
    });
    return defered.promise;
  },
    logout: function() {
      var defered = $q.defer();
      $http.post('/logout', {logout:true}).then(function(){
          identitySvc.currentUser = undefined;
          defered.resolve();
      });

      return defered.promise;
    },
  }

  return service;
}
