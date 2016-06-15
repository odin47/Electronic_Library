(function(){
	Electronic_library.controller('findController', ['$scope','$http', function($scope,$http){
		var url = 'http://localhost:5555/rest/allBooks';
		  //console.debug("heoooooooooooooooolllllllll");
		  $http.get(url).success(function (data)
				  {
              $scope.libBooks = angular.fromJson(data.jsonString);
              console.debug(data);
              console.debug($scope.libBooks);
				  });
		$scope.findBooks = function(){
			if($scope.library.isbn){
				var url = 'http://localhost:5555/rest/findBookRest/?ISBN='+$scope.library.isbn;
			}
			else if($scope.library.book_name){
				var url = 'http://localhost:5555/rest/findBookRest/?BOOK_NAME='+$scope.library.book_name;
			}
			else if($scope.library.author){
				var url = 'http://localhost:5555/rest/findBookRest/?AUTHOR='+$scope.library.author;
			}
			else if($scope.library.category){
				var url = 'http://localhost:5555/rest/findBookRest/?CATEGORY='+$scope.library.category;
			}
			else
				{
				var url = 'http://localhost:5555/rest/allBooks';
				}
			 $http.get(url).success(function (data) {
                 $scope.libBooks = angular.fromJson(data.jsonString);
                
                 console.debug(data);
                 console.debug($scope.libBooks);

            });
		}
	}]);
})();

// (function(){
// Electronic_library.controller('bookController', ['$scope','$http',
// function($scope,$http){
// $http.get('http://localhost:5555/rest/BookREST').then(function(resp) {
// console.log('Success', resp);
// // For JSON responses, resp.data contains the result
// }, function(err) {
// console.error('ERR', err);
// // err.status will contain the status code
// })
// }])
// })();
