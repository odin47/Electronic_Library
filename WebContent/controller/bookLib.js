(function(){
	Electronic_library.controller('bookController', ['$scope','$http', function($scope,$http){
		var req = {
			method:'GET',
			url:"http://localhost:5555/rest/BookREST",
			
	
		headers:{
			'Content-Type': 'text/json' , 
//	       'Access-Control-Allow-Origin': '*',
//	        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
//	        'Cache-Control': 'no-cache',
//	      'Access-Control-Allow-Headers':'Content-Type, Authorization, Content-Length, X-Requested-With'
	     
		}
	}
	
		$http(req).success(function(response, status, headers, config){
			$scope.greets = angular.fromJson(response.jsonString);
		})
	}])
})();

//(function(){
//	Electronic_library.controller('bookController', ['$scope','$http', function($scope,$http){
//		$http.get('http://localhost:5555/rest/BookREST').then(function(resp) {
//		    console.log('Success', resp);
//		    // For JSON responses, resp.data contains the result
//		  }, function(err) {
//		    console.error('ERR', err);
//		    // err.status will contain the status code
//		  })
//	}])
//})();