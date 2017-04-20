'use strict';

angular
  .module('app')
  .factory('userSvc', userSvc);

userSvc.$inject = ['$resource'];

function userSvc($resource) {

  var UserResource = $resource('/api/users/:id', {_id: "@id"},{update: {method: 'PUT', isArray:false}});
  console.log(UserResource);

  UserResource.prototype.isAdmin = function(){
    return this.roles && this.roles.indexOf('admin') > -1;
  }

  return UserResource;
}
