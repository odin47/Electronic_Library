(function(){
	Electronic_library.controller('uploadController', ['$scope','$http', function($scope,$http){
		
		$scope.uploadBooks = function(){
			 $scope.upload_result=0;
			var url = 'http://localhost:5555/rest/uploadBookREST/?ISBN='+$scope.upload.isbn+'&BOOK_NAME='+$scope.upload.book_name+'&AUTHOR='+$scope.upload.author+'&CATEGORY='+$scope.upload.category;
			 $http.get(url).success(function (data) {
                 $scope.upload_result = angular.fromJson(data.jsonString);
                
                 console.debug(data);
                 console.debug($scope.upload_result);

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
