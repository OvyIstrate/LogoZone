(function() {
    'use strict';

    angular
        .module('app')
        .directive('logoElement', logoElement);

    /* @ngInject */
    function logoElement() {
        var logoElement = {
            restrict: 'E',
            templateUrl: 'logoElement.html',
            scope: {
            },
            link: linkFunc,
            controller: logoElementCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        return logoElement;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // logoElementCtrl.$inject = [''];

    /* @ngInject */
    function logoElementCtrl() {
        var vm = this;
        vm.customer = {
          name: 'Ovi',
          activity: 'Development'
        };

        activate();

        function activate() {

        }
    }
})();
