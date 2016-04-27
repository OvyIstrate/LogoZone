(function() {
    'use strict';

    angular
        .module('app')
        .controller('authCtrl', authCtrl);

    // authCtrl.$inject = ['dependencies'];

    /* @ngInject */
    function authCtrl() {
        var vm = this;
        vm.signIn = function(username, password)
        {
            console.log('To be done for ' + username + ' ' + password);
        }

        activate();

        function activate() {

        }
    }
})();
