(function(){
	Electronic_library.controller('getAllOrderedBooks',['$scope', '$http', function($scope, $http){
		
		var url = 'http://localhost:5555/rest/getAllOrderedBooksREST';
		$http.get(url).success(function(data){
			$scope.AllOrderedBooks = angular.fromJson(data.jsonString);
			
			//console.debug($scope.AllOrderedBooks.results);
		});
		
		$scope.bookAction = function(count,id)
		{
			console.debug("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+id);
			if($scope.AllOrderedBooks.results.length)
			{
				var EMP_NAME = $scope.AllOrderedBooks.results[count].EMP_NAME;
				var BOOK_NAME = $scope.AllOrderedBooks.results[count].BOOK_NAME;
				var EMAIL = $scope.AllOrderedBooks.results[count].email;
			}
			else
				{
					var EMP_NAME = $scope.deliveryBooks.results[count].EMP_NAME;
					var BOOK_NAME = $scope.deliveryBooks.results[count].BOOK_NAME;
					var EMAIL = $scope.deliveryBooks.results[count].email;
				}
			
			//$scope.bookEmail = document.getElementById("orderEmail").innerHTML;
			console.debug(EMAIL);
			console.debug(count);
			var orderURL = 'http://localhost:5555/rest/alterOrderBookNameREST?EMP_NAME='+EMP_NAME+'&BOOK_NAME='+BOOK_NAME+'&STATUS='+id+'&email='+EMAIL;
			$http.put(orderURL).success(function(data){
				$scope.orderResult = angular.fromJson(data.jsonString);
				console.debug($scope.orderResult.result);
				window.location.reload();
			});
		}
	}]);
})();