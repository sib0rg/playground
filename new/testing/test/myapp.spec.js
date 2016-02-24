/*

'use strict';

describe('settingsController', function() {
	var $controller, $rootScope, settingsController;

	beforeEach(function() {
		module('brightApp.settingsApp');

		inject(function(_$controller_, _$rootScope_ ){
			$controller = _$controller_;
			$rootScope = _$rootScope_;
		});
		
		settingsController = $controller('settingsController', {});
		$rootScope.$apply();
	});

	describe('Initial Settings', function() {
		it('should set initially selected tab to be the \'company\' tab', function() {
			expect(settingsController.selectedTab).toBe('company');
		});
	});
});



*/

describe('something', function(){
	var $controller, $rootScope, theController;

	beforeEach(function() {
		module('myApp.mod');

		inject(function(_$controller_, _$rootScope_ ){
			$controller = _$controller_;
			$rootScope = _$rootScope_;
		});
		
		theController = $controller('theController', {});
		$rootScope.$apply();
	});	
	
	it('do something else', function(){
		
		expect(theController.name).toBe('asdasd');


	});

});