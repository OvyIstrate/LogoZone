'use strict';

angular
  .module('app')
  .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['identitySvc'];

function profileCtrl(identitySvc) {
  var vm = this;

  activate();

  function activate() {
    vm.identity = identitySvc;
  }
}
