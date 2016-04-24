'use strict';

angular
  .module('app')
  .directive('fileRead', fileRead);

function fileRead() {
  var fileRead = {
    scope: {
      fileRead:"="
    },
    link: linkFunc,
  };
  return fileRead;

  function linkFunc(scope, el, attr, ctrl) {
    el.bind("change", function(changeEvent){

      scope.fileRead = changeEvent.target.files[0];
      console.log(changeEvent.target.files[0]);
    });
  }
}
