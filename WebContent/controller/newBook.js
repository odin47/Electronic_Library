(function() {
	Electronic_library.controller('newBookController', [ '$scope', '$http', '$rootScope',
			function($scope, $http, $rootScope) {
				var bookList=[];
				$scope.curPage = 0;
				$scope.pageSize = 6;
				var url = 'http://localhost:5555/rest/newBookREST';
				//$scope.newBooks={results:[]};
				//console.debug("heoooooooooooooooolllllllll");
				$http.get(url).success(function(data) {
					$scope.newBooks = angular.fromJson(data.jsonString);
					//console.debug($scope.newBooks.results[0].BOOK_NAME);
					for (i = 0; i < $scope.newBooks.results.length; i++) {
						bookList[i] = $scope.newBooks.results[i].BOOK_NAME;
					}
					$scope.datalists=bookList;
					//console.debug($scope.datalists);
					 $scope.complete=function(){
					      //console.log($scope.datalists);
					    $( "#tags" ).autocomplete({
					      source: $scope.datalists
					    });
					    } 
					 
					 
						 $scope.search = function()
							{
						
								if($scope.searchBook)
									{
										var urlSearch = 'http://localhost:5555/rest/searchBookREST?BookName='+$scope.searchBook;
									}
								else
									{
										var urlSearch = 'http://localhost:5555/rest/newBookREST';
									}
							
								$http.get(urlSearch).success(function(data){
								$scope.newBooks = angular.fromJson(data.jsonString);
								//console.debug($scope.newBooks.results.AUTHOR);
								});
								
							}
					
					
					
				});
//				$scope = $scope || angular.element(document).scope();
//				if(force || $scope.$$phase)
//					{
//						$scope.$apply();
//					}
				
				$scope.display = function(a) {
					
//					$scope.isbnNumber = document.getElementById("isbn").innerHTML;
					console.debug($scope.curPage);
					var count = $scope.curPage + 1;
					var countItems = 0;
					if(count == 1)
						{
						$scope.image = $scope.newBooks.results[a].THUMBNAIL;
						$scope.author = $scope.newBooks.results[a].AUTHOR;
						$scope.isbn = $scope.newBooks.results[a].ISBN;
						$scope.category = $scope.newBooks.results[a].CATEGORY;
						$scope.name = $scope.newBooks.results[a].BOOK_NAME;
						}
					else
						{
						countItems = 6*(count-1);
						console.debug(countItems);
						$scope.image = $scope.newBooks.results[a+countItems].THUMBNAIL;
						$scope.author = $scope.newBooks.results[a+countItems].AUTHOR;
						$scope.isbn = $scope.newBooks.results[a+countItems].ISBN;
						$scope.category = $scope.newBooks.results[a+countItems].CATEGORY;
						$scope.name = $scope.newBooks.results[a+countItems].BOOK_NAME;
						}
					
					//console.log($scope.auth);
				};
				
				$scope.numberOfPages = function()
				{
					return Math.ceil($scope.newBooks.results.length / $scope.pageSize);
				};
				
				
				
			

			} ]);
})();
