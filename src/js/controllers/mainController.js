(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = [];

    /* @ngInject */
    function mainCtrl() {
        var vm = this;
        // vm.isLogged = authSvc.isLogged;
        vm.dummyArray = [];
        var allMightyNumber = 52;
        for(var i = 0; i < allMightyNumber; i++)
        {
           vm.dummyArray[i] = i;
        }
    }
})();
