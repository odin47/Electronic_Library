//(function(){
//	Electronic_library.directive('fileModel', ['$parse', function($parse){
//		return{
//			restrict: 'A',
//			link: function(scope, element, attrs){
//				var model = $parse(attrs.fileModel);
//				var modelSetter = model.assign;
//				
//				element.bind('change', function(){
//					scope.$apply(function(){
//						modelSetter(scope, element[0].files[0]);
//					})
//				})
//			}
//		}
//	}])
//})();
Electronic_library.directive('fileModel', ['$parse', function($parse){
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				var model = $parse(attrs.fileModel);
				//console.debug(model);
				var modelSetter = model.assign;
				//console.debug(modelSetter);
				element.bind('change', function(){
					scope.$apply(function(){
						//console.debug("after change");
						modelSetter(scope, element[0].files[0]);
						//console.debug(element[0].files[0]);
						
					});
				});
			}
		};
	}]);