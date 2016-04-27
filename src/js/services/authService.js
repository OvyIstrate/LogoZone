'use strict';

angular
  .module('app')
  .factory('authSvc', authSvc);

function authSvc() {
  var service = {
    function: isLogged
  };

  return service;

  function isLogged() {
  }
}
