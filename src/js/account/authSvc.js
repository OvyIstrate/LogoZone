'use strict';

angular
  .module('app')
  .factory('authSvc', authSvc);

  authSvc.$inject = ['$q', '$http', 'identitySvc', 'userSvc'];

function authSvc($q, $http, identitySvc, userSvc) {
  var service = {

    authenticateUser: function(username, password){
      username = username.toLowerCase();
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
    },

    authorizeCurrentUserForRoute: function(role){
      if(identitySvc.isAuthorized(role))
        return true;
      return $q.reject('not authorized');
    },

    createUser: function(newUserData){
      var newUser = new userSvc(newUserData);
      var defered = $q.defer();
      newUser.$save().then(function(){
        identitySvc.currentUser = newUser;
        defered.resolve();
      }, function(response){
        defered.reject(response.data.reason);
      });

      return defered.promise;
    },

    updateCurrentUser: function(userData){
      var defered = $q.defer();
      var clone = angular.copy(identitySvc.currentUser);
      console.log(identitySvc.currentUser);
      angular.extend(clone, userData);
      clone.$update().then(function(){
        identitySvc.currentUser = clone;
        defered.resolve();
      }, function(response){
        defered.reject(response.data.reason);
      });
      return defered.promise;
    }
  }

  return service;
}
