(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['identitySvc', 'notifier', 'authSvc', '$location'];

    /* @ngInject */
    function mainCtrl(identitySvc, notifier, authSvc, $location) {
        var vm = this;
        console.log(identitySvc.isAuthenticated());
        vm.identity = identitySvc;
        vm.dummyArray = [];

        var allMightyNumber = 52;

        for(var i = 0; i < allMightyNumber; i++)
        {
           vm.dummyArray[i] = i;
        }
        vm.logout = function(){
          authSvc.logout().then(function(){
            vm.identity = undefined;
            notifier.notify("You've succesfully signed out!", "success");
            $location.path('/login');
          });
        }
        
        vm.isLogged = function(){
          if(identitySvc.currentUser != null && identitySvc.isAuthenticated)
            return true;
          return false;
          }
    }
})();
