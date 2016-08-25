angular.module('app').value('logToastr', toastr);

angular.module('app').factory('notifier', function(logToastr){
  return {
    notify: function(msg, type){
      if(type === "success")
        logToastr.success(msg);
      else
        logToastr.error(msg);
      console.log(msg);
    }
  }
})
