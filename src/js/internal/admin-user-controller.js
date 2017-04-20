'use strict';

angular
  .module('app')
  .controller('adminUserCtrl', adminUserCtrl);

  adminUserCtrl.$inject = ['userSvc', '$routeParams','userCachedSvc'];

  function adminUserCtrl(userSvc, $routeParams, userCachedSvc) {
  var vm = this;
  vm.roleOptions = [{value:'admin', text:'Admin'}];
  vm.selectedRole = vm.roleOptions[0].value;

    vm.user = $.grep(collection, function(item){ return item._id === $routeParams.id;})[0];
    userCachedSvc.query().$promise.then(function(collection){
    vm.hasRoles = vm.user.roles.length > 0;
  });
}
