(function(){
	Electronic_library.controller('tabsController',['$scope', function($scope){
		$scope.select = function(item)
		{
			$scope.selected = item;
		};
		
		$scope.isActive = function(item)
		{
			return $scope.selected === item;
		}
	
	}]);
})();