var srkunze_module = angular.module('srkunze', []);

srkunze_module
.factory('MyService', ['$http', '$interval', function ($http, $interval) {
    var service = {
    };

    //function update() {
    //    $http.get(?????????).then(function(response) {
    //        //service.???? = response.data;
    //    });
    //}

	//$interval(update, 60*1000);
	//update();
    return service;
}]);
