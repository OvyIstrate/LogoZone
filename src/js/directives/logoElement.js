(function () {
    'use strict';

    angular
        .module('app')
        .directive('logoElement', logoElement);

    /* @ngInject */
    logoElement.$inject = ['$mdDialog', '$mdMedia'];

    function logoElement($mdDialog, $mdMedia) {

        var logoElement = {
            restrict: 'E',
            templateUrl: 'logoElement.html',
            scope: {},
            link: linkFunc,
            controller: logoElementCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        return logoElement;

        function linkFunc(scope, el, attr, ctrl) {}
    }

    logoElementCtrl.$inject = ['$mdDialog', '$mdMedia'];

    /* @ngInject */
    function logoElementCtrl($mdDialog, $mdMedia) {
        var vm = this;

        vm.setLogo = function (ev) {
            var confirm = $mdDialog.prompt()
                .title("Test")
                .textContent("Test Content")
                .placeholder("Image")
                .targetEvent(ev)
                .ok('Ok')
                .cancel('Cancel')

            $mdDialog.show(confirm).then(function (result) {
                vm.status = 'You decided to name your dog ' + result + '.';
            }, function () {
                vm.status = 'You didn\'t name your dog.';
            });
        }
    }
})();
