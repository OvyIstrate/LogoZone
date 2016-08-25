(function() {
    'use strict';

    var app = angular
        .module('app', ['ngMaterial', 'ngRoute']);

    app.config(routeConfig);

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
        .when('/login', {
          templateUrl:'/account/login.html',
          controller:'authCtrl',
          controllerAs:'vm'
        })
        .when('/logout', {
          templateUrl:'/account/logout.html',
          controller:'authCtrl',
          controllerAs:'vm'
        })
        .when('/register', {
          templateUrl:'/account/register.html',
          controller:'registerCtrl',
          controllerAs:'vm'
        })
        .otherwise({
          redirectTo:'/'
        });
    }

    app.run(authConfig)

    authConfig.$inject = ['$rootScope', 'userSvc', '$location'];

    function authConfig($rootScope, userSvc, $location){
      $rootScope.$on('$routeChangeStart', function(){
        if(userSvc.getCurrentUser())
          $location.path('/');
        else
          $location.path('/login');
      });
    }

})();
