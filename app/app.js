(function(){
	'use strict';

	angular.module('myApp', ['ngRoute','myApp.dashboard'])
		.config(routeProviderRegistration);

	function routeProviderRegistration($routeProvider, $locationProvider) {

		$routeProvider
			.when('/test', {
				templateUrl: 'repos/playground/app/modules/dashboard/views/dashboard.html',
				controller: 'repos/playground/app/modules/dashboard/dashboardController.js',
				controlerAs: 'vm'
			});
/*

            .when('/', {
                redirectTo: '/login'
            })
            .otherwise({
                templateUrl: 'modules/errors/views/404.html',
                controller: 'errorsController',
                controllerAs: 'vm'
            });

*/
		//$locationProvider.html5Mode(true);
	}

})();