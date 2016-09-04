(function() {
    'use strict';

    angular
        .module('app')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['identitySvc', 'notifier', 'authSvc', '$location'];

    /* @ngInject */
    function navCtrl(identitySvc, notifier, authSvc, $location) {
        var vm = this;

        vm.identity = identitySvc;

        console.log(vm.identity);
        vm.logout = function(){
          authSvc.logout().then(function(){
            notifier.notify("You've succesfully signed out!", "success");
            $location.path('/login');
          });
        }
    }
})();
