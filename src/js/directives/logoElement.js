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
        vm.setLogo = function(ev) {
        $mdDialog.show({
          controller: dialogController,
          controllerAs: 'vm',
          templateUrl: 'dialog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
        })
        .then(function(answer) {
          if(answer !== undefined)
          vm.imageSrc = answer.name;
          console.log(vm.imageSrc);
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
      };
    }

    function dialogController($mdDialog) {
      var vm = this;

      vm.hide = function() {
        $mdDialog.hide();
      };
      vm.cancel = function() {
        $mdDialog.cancel();
      };
      vm.answer = function(answer) {
        if(answer !== undefined)
          $mdDialog.hide(answer);
        vm.error = 'You need to select an Image';
      };

      vm.testFunction = function() {
        console.log(vm.fileObject);
        }
      };
})();
