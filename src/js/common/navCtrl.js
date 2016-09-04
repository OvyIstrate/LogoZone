(function() {
    'use strict';

    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['identitySvc', 'notifier', 'authSvc', '$location'];

    /* @ngInject */
    function navCtrl(identitySvc, notifier, authSvc, $location) {
        var vm = this;

        init();

        vm.logout = function(){
          authSvc.logout().then(function(){
            vm.identity = undefined;
            notifier.notify("You've succesfully signed out!", "success");
            $location.path('/login');
          });
        }

        // vm.isLogged = function(){
        //   if(identitySvc.currentUser != null && identitySvc.isAuthenticated()){
        //     vm.identity = identitySvc;
        //     return true;
        //   }
        //   return false;
        //   }

          function init(){
            vm.identity = identitySvc;
            vm.isLogged = identitySvc.currentUser != null;
          }
    }
})();
