(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    /* @ngInject */
    function mainCtrl() {
        var vm = this;
        vm.dummyArray = [];
        var allMightyNumber = 52;

        if(vm.dummyArray.length == 0) {
          for(var i = 0; i < allMightyNumber; i++)
          {
             vm.dummyArray[i] = i;
          }
        }
    }
})();
