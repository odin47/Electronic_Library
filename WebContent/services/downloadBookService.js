(function() {
	Electronic_library.service('downloadBook', [ '$http','$q',
			function($http,$q) {
				this.post = function(uploadURL, data) {
					// console.debug(data);
					var fd = new FormData();
					for ( var key in data) {
						fd.append(key, data[key]);
						// console.debug(key);
						// console.debug(data[key]);
					}
			var deffered = $q.defer();		
			 return $http.post(uploadURL, fd, {

						transformRequest : angular.indentity,
						headers : {
							'Content-Type' : undefined
						}

					
					}).then(function(response){
						deffered.resolve(response.data);
						return deffered.promise;
					},function(response){
						deffered.reject(response);
						return deffered.promise;
					})
				}
			} ])

})();