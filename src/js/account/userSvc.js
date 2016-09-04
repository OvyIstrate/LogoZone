'use strict';

angular
  .module('app')
  .factory('userSvc', userSvc);

userSvc.$inject = ['$resource'];

function userSvc($resource) {

  var UserResource = $resource('/api/users/:id', {_id: "@id"});

  UserResource.prototype.isAdmin = function($event){
    console.log("content");
    return this.roles && this.roles.indexOf('admin') > -1;
    $event.preventDefault();
  }

  return UserResource;
}
