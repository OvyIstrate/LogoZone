'use strict';

angular
  .module('app')
  .controller('registerCtrl', registerCtrl);

function registerCtrl() {
  var vm = this;

  vm.newUser = {
    firstname: undefined,
    lastname:undefined,
    email:undefined,
    username:undefined,
    password:undefined,
    confirm:undefined
  };

  vm.register = function(){

  }
}
