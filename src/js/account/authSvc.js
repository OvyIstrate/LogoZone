'use strict';

angular
  .module('app')
  .factory('authSvc', authSvc);

  authSvc.$inject = ['$q', '$http', 'identitySvc', 'userSvc'];

function authSvc($q, $http, identitySvc, userSvc) {
  var service = {

    authenticateUser: function(username, password){
      var defered = $q.defer();
      $http.post('/login', {username: username, password:password}).then(function(response){
        if(response.data.success){
          var user = new userSvc();
          angular.extend(user, response.data.user);
          identitySvc.currentUser = user;
          defered.resolve(true);
        }
        else
          defered.resolve(false);
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

    getCurrentUser: function(){
      var currentUser;
      var defered = $q.defer();
      $http.get('/user').then(function(response){
        if(response.data !== "")
        {
          var user = new userSvc();
          angular.extend(user, response.data);
          identitySvc.currentUser = user;
          defered.resolve(currentUser);
        }
        else
          defered.resolve(response.data)
      });
      return defered.promise;
    }
  }

  return service;
}
