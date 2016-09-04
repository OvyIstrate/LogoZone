'use strict';

angular
  .module('app')
  .controller('adminCtrl', adminCtrl);

  adminCtrl.$inject = ['identitySvc'];

function adminCtrl(identitySvc) {
  var vm = this;

  activate();

  function activate() {
    vm.identity = identitySvc;
  }

}
