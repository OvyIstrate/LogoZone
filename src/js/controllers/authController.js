(function() {
    'use strict';

    angular
        .module('app')
        .controller('authCtrl', authCtrl);

    authCtrl.$inject = ['$http'];

    /* @ngInject */
    function authCtrl($http) {
        var vm = this;
        vm.signIn = function(userName, password)
        {
            $http.post('/login', {userName: userName, password:password}).then(function(response){
              if(response.data.success){
                console.log('logged in');
              }
              else
                {
                  console.log('not logged!');
                }
            });
        }

        activate();

        function activate() {

        }
    }
})();
