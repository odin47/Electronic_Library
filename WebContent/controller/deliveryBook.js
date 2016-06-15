(function(){
	Electronic_library.controller('deliveryBooksAdd',['$scope', '$http', function($scope,$http){
		if($scope.tabNumber = 1)
			{
				var url = 'http://localhost:5555/rest/getDeliveryBooksREST?status=2';
			}
		else if($scope.tabNumber = 2)
			{
			var url = 'http://localhost:5555/rest/getDeliveryBooksREST?status=3';
			}
		else
			{
			var url = 'http://localhost:5555/rest/getDeliveryBooksREST?status=4';
			}
		//var url = 'http://localhost:5555/rest/getDeliveryBooksREST';
		$http.get(url).success(function(data){
			$scope.deliveryBooks = angular.fromJson(data.jsonString);
			//console.debug($scope.deliveryBooks);
		});
		
		
	}]);
})();