(function() {
    'use strict';

    var app = angular
        .module('app', ['ngMaterial', 'ngRoute', 'ngResource']);

    app.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/main/home.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/home', {
                templateUrl: '/main/home.html',
                controller: 'mainCtrl',
                controllerAs: 'vm'
            })
            .when('/admin', {
              templateUrl:'/internal/admin.html',
              controller:'adminCtrl',
              controllerAs:'vm'
            })
            .when('/profile', {
              templateUrl:'/internal/profile.html',
              controller:'profileCtrl',
              controllerAs:'vm'
            })
            .when('/about', {
                templateUrl: '/main/about.html',
                controller: 'mainCtrl',
                controlleras: 'vm'
            })
            .when('/login', {
                templateUrl: '/account/login.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
            .when('/logout', {
                templateUrl: '/account/logout.html',
                controller: 'authCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/account/register.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    app.run(authConfig)

    authConfig.$inject = ['$rootScope', '$location', 'authSvc', 'identitySvc'];

    function authConfig($rootScope, $location, authSvc, identitySvc) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {

            authSvc.getCurrentUser().then(function(data) {
                //DEV_ENVIRONMENT
                // data = getUserForDevelopmentEnvironment();
                //DEV_ENVIRONMENT
                if (data || identitySvc.isAuthenticated()) {
                    if (identitySvc.currentUser === undefined)
                        identitySvc.currentUser = data;
                } else if (next.templateUrl == "/account/register.html")
                    $location.path('/register');
                else
                    $location.path('/login');
            });
        });
    }

    function getUserForDevelopmentEnvironment() {
        return {
            __v: 0,
            _id: "57cc2021c434ec1026b83b13",
            email: "john.doe@tstmail.com",
            firstname: "John",
            hashed_pwd: "e2573d355b013f9b02fca910447fa14a345dabc3",
            lastname: "Doe",
            roles: ["admin"],
            salt: "g/lS5nYRJJJcby9pxKRBBlYg1+FlccrybIR5VCamDIOV1vUkq3ICJxPcHG9wNiD5Zqro3WIDB5pHhMd3DuDgFNud+153JeStiNf6hj2AiwEbVwieS7AsAgzpDGpmp1LXZFQ5i2J2LLUjwm9iiUYDRol71jyFAtAkcWkgS5eD1A4=",
            username: "john.doe"
        };
    }

})();
