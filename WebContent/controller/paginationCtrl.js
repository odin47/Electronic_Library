//(function(){
//	Electronic_library.controller('paginationCtrl',['$scope', '$http', function($scope,$http){
//		$scope.itemsPerPage = 6;
//		$scope.currentPage = 0;
//		
//		var url = 'http://localhost:5555/rest/newBookREST';
//		
//		$http.get(url).success(function(data){
//			$scope.pageBook = angular.fromJson(data.jsonString);
//			console.debug($scope.pageBook.results[0].BOOK_NAME);
//		});
//		
//		//console.debug(data);
//		$scope.range = function()
//		{
//			var rangeSize = 5;
//			var ret = [];
//			var start;
//			
//			start = $scope.currentPage;
//			if(start > $scope.pageCount()-rangeSize)
//				{
//				start = $scope.pageCount() - rangeSize+1;
//				}
//			 for (var i=start; i<start+rangeSize; i++) {
//			      ret.push(i);
//			    }
//			    return ret;
//		};
//		
//		$scope.prevPage = function() {
//		    if ($scope.currentPage > 0) {
//		      $scope.currentPage--;
//		    }
//		  };
//
//		  $scope.prevPageDisabled = function() {
//		    return $scope.currentPage === 0 ? "disabled" : "";
//		  };
//
//		  $scope.pageCount = function() {
//		    return Math.ceil($scope.pageBook.length/$scope.itemsPerPage)-1;
//		  };
//
//		  $scope.nextPage = function() {
//		    if ($scope.currentPage < $scope.pageCount()) {
//		      $scope.currentPage++;
//		    }
//		  };
//
//		  $scope.nextPageDisabled = function() {
//		    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
//		  };
//
//		  $scope.setPage = function(n) {
//		    $scope.currentPage = n;
//		  };
//		
//	}])
//})();