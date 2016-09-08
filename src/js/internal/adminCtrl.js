'use strict';

angular
  .module('app')
  .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['identitySvc', 'adminSvc', 'notifier'];

function adminCtrl(identitySvc, adminSvc, notifier) {
  var vm = this;
  vm.users = [];
  activate();

  function activate() {
    vm.identity = identitySvc;

    adminSvc.getUsers().then(onUserGetSuccess, onUserGetError);
  }

  function onUserGetSuccess(data){
    vm.users = data;
  }

  function onUserGetError(err){
    notifier.error(err.toString());
  }

}
