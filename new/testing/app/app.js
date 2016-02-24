(function(){
	'use strict';

	angular.module('myApp', ['myApp.mod'])

	angular.module('myApp.mod', []);

})();

(function(){

	'use strict';

	angular.module('myApp.mod', [])
		.factory('appCache', appCache)

	appCache.$inject = ['$window'];

	function appCache($window) {

		var localStorage = {
			get : get,
			put: put,
			remove : remove,
			removeAll : removeAll
		}

		return localStorage;

		function get(cacheName) {
			var cached = JSON.parse($window.localStorage.getItem(cacheName));
			if (cached == null) {
			    return null;
			}
			return cached.data;
		};
		function put(cacheName, data) {
			var dataToCache = { data: data };
			var objectToSaveToJson = JSON.stringify(dataToCache);
			$window.localStorage.setItem(cacheName, objectToSaveToJson);
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

	angular.module('myApp.mod')
			.factory('theFac', theFac);
	function theFac(){		
		var theFac = {
			getStuff : getStuff
		}

		return theFac;

		function getStuff() {
			return '12321';
		}

		

	}

})();

(function(){
	'use strict';

	angular.module('myApp.mod')
		.factory('flickr',flickr);

		flickr.$inject = ['$http'];

	function flickr($http){

		var flickr = {
			getPhotos : getPhotos
		}

		return flickr;

		function getPhotos(tags){
			var url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags='+tags;
			return $http.jsonp(url)
				.success(function(response){
					return response.items;
				});
			}

		}

})();


(function(){
	'use strict';

	angular.module('myApp.mod')
		.controller('theController', theController);

	theController.$inject = ['theFac', 'flickr', 'appCache'];

	function theController(theFac, flickr, appCache) {

		var vm = this;
		vm.photos;
		vm.selectedList = [];
		vm.tag = 'london';

		//appCache.remove('selectedPhotos');

		if (appCache.get('selectedPhotos') === undefined) {
			appCache.put('selectedPhotos', [])
		}

		vm.selectedList = appCache.get('selectedPhotos');

		flickr.getPhotos(vm.tag).success(function(response){
			vm.photos = response.items;
			for(var i=0;i< vm.photos.length;i++) {
				 var link = vm.photos[i].link; 
				 var inSelection = inArray(vm.selectedList, link);
				if(inSelection >= 0) {
					vm.photos[i].selected = true;
				}
			}

		});
	
		vm.selectPhoto = function(object){
			
			object.selected = !object.selected;
			
			var name = object.link;
			var inArrayIndex = inArray(vm.selectedList, name);
			
			if(inArrayIndex >= 0) {
				vm.selectedList.splice(0, 1);				
			} else {				
				vm.selectedList.push(name);
			}			
			appCache.put('selectedPhotos', vm.selectedList);
		};

		function inArray(arr, string) {
			return arr.indexOf(string);
		}

	}
})();

