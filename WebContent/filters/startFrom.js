(function(){
	Electronic_library.filter('pagination', function(){
		//console.debug($scope.newBooks);
		
		return function(input, start){
			//console.debug(data);
			start =+ start;
			return input.slice(start);
		}
	})
})();