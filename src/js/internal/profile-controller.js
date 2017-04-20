'use strict';

angular
  .module('app')
  .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['identitySvc', 'authSvc', 'notifier'];

function profileCtrl(identitySvc, authSvc, notifier) {
  var vm = this;
  vm.password = "";

  activate();

  function activate() {
    vm.identity = identitySvc;
  }

  vm.update = function(){
    var newUserData = {
      username:vm.identity.currentUser.username,
      firstname:vm.identity.currentUser.firstname,
      lastname:vm.identity.currentUser.lastname,
      email:vm.identity.currentUser.email,
    };

    if(vm.password && vm.password.length > 0){
      newUserData.password = vm.password;
    }
    console.log(vm.password);

    authSvc.updateCurrentUser(newUserData).then(function(){
      notifier.notify('User Profile has been updated!');
    }, function(reason){
      notifier.notify(reason);
    });

  }
}
