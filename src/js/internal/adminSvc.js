'use strict';

angular
  .module('app')
  .factory('adminSvc', adminSvc);

  adminSvc.$inject = ['$http', '$q'];

function adminSvc($http, $q) {
  var service = {
    getUsers: getUsers
  };

  function getUsers() {
    var defered = $q.defer();
    $http.get('/api/users').then(function(response){
      defered.resolve(response.data);
    }, function(){
      defered.reject();
    });

    return defered.promise;
  }
  return service;

}
