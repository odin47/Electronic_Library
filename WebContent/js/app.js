var Electronic_library = angular.module('eLibrary',['ui.router','ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home',{
	url: '/',
	onEnter:function($rootScope,$state){
			if($rootScope.userRole == 'tester'){
				$state.go('testerHome')				
			}
			else if($rootScope.userRole == 'LibraryAdmin'){
				$state.go('adminHome')	
			}
			else if($rootScope.userRole == 'Delivery'){
				$state.go('deliveryHome');
				$state.go('deliveryHome.deliveryBooks')
			}
		}
	})
	$stateProvider
	.state('testerHome',{
		url:'/emp_home',
		templateUrl:'/electronic_library/employee.html'
	})
	.state('adminHome',{
		url:'/admin_home',
		templateUrl:'/electronic_library/admin.html'
	})
	.state('deliveryHome',{
		url:'/delivery_home',
		templateUrl:'/electronic_library/tabs.html'
		
			
	})
	
	.state('deliveryHome.deliveryBooks',{
		url:'/',
		template:'<h1>HELLO</h1>'
	})
	.state('deliveryHome.delivery',{
		url:'/',
		templateUrl:'/electronic_library/delivery.html'
	})
})
.run(function($rootScope){
	$rootScope.userRole=document.getElementById('userRole').innerHTML;
	
})