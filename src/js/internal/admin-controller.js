'use strict';

angular
  .module('app')
  .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['identitySvc', 'userCachedSvc'];

function adminCtrl(identitySvc, userCachedSvc) {
  var vm = this;
  vm.users = userCachedSvc.query();
}
