(function(){
	Electronic_library.controller('uploadLibraryBook', ['$scope','submitForm', function($scope,submitForm){
		$scope.count=0;
		$scope.Submit = function()
		{
			var uploadURL = 'http://localhost:5555/rest/insertREST';
			//console.debug($scope.upload);
			submitForm.post(uploadURL,$scope.upload).then(
					function(result){
						$scope.count = result;
					},
					function(error){
						console.log(error.statusText);
						$scope.count = "Service error";
					});
			function form_refresh(){
				window.location.reload();
			}
			
			//console.debug(submitForm.post(uploadURL,$scope.upload));
		}
		
	}]);
})();

