(function() {
    'use strict';

    angular
        .module('app')
        .controller('testCtrl', testCtrl);

    // testCtrl.$inject = ['dependencies'];

    /* @ngInject */
    function testCtrl(dependencies) {
        var vm = this;
        vm.test = "test message";
        activate();

        function activate() {

        }
    }
})();
