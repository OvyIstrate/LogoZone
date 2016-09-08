angular.module('app').value('logToastr', toastr);

angular.module('app').factory('notifier', function(logToastr) {
    return {
        notify: function(msg) {
            logToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            logToastr.error(msg);
            console.log(msg);
        }
    }
})
