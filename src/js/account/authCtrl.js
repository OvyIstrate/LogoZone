(function() {
    'use strict';

    angular
        .module('app')
        .controller('authCtrl', authCtrl);

    authCtrl.$inject = ['$http', 'notifier', 'identitySvc', '$location', 'authSvc'];

    /* @ngInject */
    function authCtrl($http, notifier, identitySvc, $location, authSvc) {
        var vm = this;

        vm.loginImage = "../images/login.png";

        vm.signIn = function(username, password)
        {
          authSvc.authenticateUser(username, password).then(function(success){
            if(success){
              notifier.notify("You've succesfully signed in!","success");
              vm.isNotAuthenticated = false;
              $location.path('/');
            }
            else
            {
              notifier.notify('Username/Password combination incorrect',"error");
              vm.isNotAuthenticated = true;
            }
          });
        }

        vm.register = function(){
          $location.path('/register');
        }
    }
})();
