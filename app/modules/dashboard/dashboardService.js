(function(){
	
	'use strict';

	angular.module('myApp.dashboard',[])
	.service('dashboardService', dashboardService);

	function dashboardService() {

		var service = {
			getStuff: getStuff
		}

		function getStuff() {
			return $http({

			}).then(function(){

			}).catch(function(){

			});
		}

	}

})();