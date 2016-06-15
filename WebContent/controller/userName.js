(function(){
	Electronic_library.controller('userName',['$scope', '$http', '$rootScope', function($scope,$http,$rootScope){
//		var url = 'http://localhost:5555/rest/userNameREST';
//		
//		$http.get(url).success(function(data){
//			$scope.loggedUser = angular.fromJson(data.jsonString);
//			//console.debug("8888888888888888888888888888888888888888888888888888888888888888888888"+loggedUser);
//			});
		
		$rootScope.orderName = document.getElementById("employeeName").innerHTML;
		$rootScope.orderEmail = document.getElementById("userEmail").innerHTML;
		console.debug($rootScope.orderEmail);
//		$rootScope.userRole = document.getElementById("userRole").innerHTML;
//		console.debug($rootScope.userRole);
		$rootScope.sliderFlag = 1;
		if($rootScope.userRole=='LibraryAdmin' || $rootScope.userRole=='Delivery')
			$rootScope.sliderFlag = 0;
		console.debug(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+$rootScope.sliderFlag);
	}]);
})();