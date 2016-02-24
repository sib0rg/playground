
(function(){
	'use strict';
	angular.module('myApp', ['myApp.dashboardMod']);
	angular.module('myApp.dashboardMod', []);
})();



(function(){
	'use strict';
	angular
		.module('myApp.dashboardMod')
		.factory('flickrService', flickrService);

		flickrService.$injext = ['$http'];

	function flickrService($http) {
		var service = {
			getPhotos : getPhotos
		}
		return service;
		function getPhotos() {
			return $http({
                url: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&',
                method: 'GET',
            }).then(function(response){
                return response;
            });
		} 
	}
})();

(function(){
	'use strict';
	angular
		.module('myApp.dashboardMod')
		.factory('appCache', appCache);
		appCache.$inject = ['$window'];

	function appCache($window) {
		var storage = {
			get : get,
			put : put,
			remove : remove,
			removeAll : removeAll
		}
		return storage;
		function get(){
			var cached = JSON.parse($window.localStorage.getItem(cacheName));
            if (cached == null) {
                return null;
            }
		}
		function put(cacheName, data) {
            var date = null;            
            var expiryTime = new Date(); 
            var dataToCache = { data: data, expiryTime: date };
            var objectToSaveToJason = JSON.stringify(dataToCache);

            $window.localStorage.setItem(cacheName, objectToSaveToJason);
        };
        function remove(cacheName) {
            $window.localStorage.removeItem(cacheName);
        };
        function removeAll() {
            $window.localStorage.clear();
        };
	}
})();



(function(){
	'use strict';	
	angular
		.module('myApp.dashboardMod')
		.controller('dashboardController', ['flickrService', 'appCache', function(flickrService, appCache){
			appCache.put('dsf', {'sad':'sdfds'});
			appCache.removeAll();

			flickrService.getPhotos();

		}]);
})();