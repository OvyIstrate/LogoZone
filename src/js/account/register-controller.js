'use strict';

angular
    .module('app')
    .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$timeout', '$location', 'authSvc', 'notifier']

function registerCtrl($timeout, $location, authSvc, notifier) {
    var vm = this;
    var confirm_input = angular.element(document.querySelector('#confirm_password'));

    vm.register = function() {
        if (vm.password === vm.confirm) {
            var newUser = {
                username: vm.username,
                email: vm.email,
                firstname: vm.firstname,
                lastname: vm.lastname,
                password: vm.password
            };

            authSvc.createUser(newUser).then(function(){
              notifier.notify("User account created!");
              $location.path('/');
            }, function(reason){
               notifier.error(reason);
            });
        }
        else {
          confirm_input.context.setCustomValidity("Passwords Don't Match");
          $timeout(function () {
            confirm_input.context.setCustomValidity('');
          }, 5000);
        }
    }
}
