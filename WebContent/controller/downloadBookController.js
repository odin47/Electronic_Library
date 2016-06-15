(function(){
	Electronic_library.controller('downloadBook', ['$scope','$http','$rootScope', function($scope,$http,$rootScope){
		
//		$scope.Submit = function()
//		{
//			var uploadURL = 'http://localhost:5555/rest/insertREST';
//			//console.debug($scope.upload);
//			submitForm.post(uploadURL,$scope.upload).then(
//					function(result){
//						$scope.count = result;
//					},
//					function(error){
//						console.log(error.statusText);
//						$scope.count = "Service error";
//					});
//			function form_refresh(){
//				window.location.reload();
//			}
//			
//			//console.debug(submitForm.post(uploadURL,$scope.upload));
//		}
		
		$scope.order = function()
		{
			 $scope.orderBookName = $scope.isbn+'.pdf';
             //$scope.order.name = document.getElementById("employeeName").innerHTML;
             console.debug($rootScope.orderEmail);
             var orderBook = 'http://localhost:5555/rest/orderBookREST/?bookName='+$scope.orderBookName+'&userName='+$rootScope.orderName+'&email='+$rootScope.orderEmail;
             $http.post(orderBook).success(function(data){
            	 $scope.orderResult = angular.fromJson(data.jsonString);
            	 console.debug($scope.orderResult.result);
             });
		};
		
		$scope.download = function()
		{
			//$scope.dBooks='';
			//$scope.order=[];
			var url = 'http://localhost:5555/rest/downloadBookREST?isbn='+$scope.isbn;
			//console.debug(url);
			 $http.get(url).success(function (data)
					  {
	             $scope.dBooks = angular.fromJson(data.jsonString);
	            // console.debug($scope.dBooks.libbook);
	             var book = 'http://localhost:8585/electronic_library/Books/'+$scope.dBooks.libbook;
	            
	             console.debug($scope.order);
	             //$scope.downloadBook = book;
	            // window.location.href = book;
	             var win = window.open(book, '_blank');
	             win.focus();
//	             var file = new Blob([book], { type: 'application/pdf' });
//	             saveAs(file);
	       
					  });
		}
		
		
	}]);
})();

