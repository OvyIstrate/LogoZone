(function() {
    'use strict';

    angular
        .module('app', ['ngMaterial', 'ngRoute'])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider)
    {
      $routeProvider
        .when('/', {
          templateUrl:'home.html',
          controller:'mainCtrl',
          controllerAs:'vm'
        })
        .when('/home', {
          templateUrl:'home.html',
          controller:'mainCtrl',
          controllerAs:'vm'
        })
        .when('/signIn', {
          templateUrl:'signIn.html',
          controller:'authCtrl',
          controllerAs:'vm'
        })
        .when('/signUp', {
          templateUrl:'signUp.html',
          controller:'authCtrl',
          controllerAs:'vm'
        })
        .otherwise({
          redirectTo:'/'
        });
    }
})();
