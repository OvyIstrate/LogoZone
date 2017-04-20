'use strict';

angular
  .module('app')
  .factory('userCachedSvc', userCachedSvc);

  userCachedSvc.$inject = ['userSvc'];

function userCachedSvc(userSvc) {
  var users;
  return {
      query: function(){
        if(!users){
          users = userSvc.query();
        }
        return users;
      }
  }
}
