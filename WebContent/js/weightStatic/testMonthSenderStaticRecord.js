angular.module('myApp', []).controller('weightStaticCtrl',
		function($scope, $http) {
			$http({
				url : '/ATWHttpServer/weight/getTestStaticInfo.do',
				method : 'POST',
				params : {
					"timeType" : "1",
					"condition" : "sender"
				}
			}).success(function(response) {
				$scope.weightStatic = response.result;
			});
		});