(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    // mainCtrl.$inject = ['dependencies'];

    /* @ngInject */
    function mainCtrl() {
        var vm = this;
        vm.dummyArray = [];
        const allMightyNumber = 52;
        for(var i = 0; i < allMightyNumber; i++)
        {
           vm.dummyArray[i] = i;
        }
    }
})();
