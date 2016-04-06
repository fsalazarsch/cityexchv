
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
		angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};

angular.module("App",["lumx","ngRoute","ngResource"])



.config(['$routeProvider', '$compileProvider', '$httpProvider', function($routeProvider, $compileProvider, $httpProvider) {
	$routeProvider
			.when('/', {
				controller: 'MainController',
				templateUrl: 'templates/home.html'
				})
			.when('/driver/:id', {
				controller: 'DriverController',
				templateUrl: 'templates/driver.html'
				})
			.when('/driver/edit/:id', {
				controller: 'DriverpstController',
				templateUrl: 'templates/driver_form.html'
				})	
			.when('/servicio/:id', {
				controller: 'ServicioController',
				templateUrl: 'templates/servicio.html'
				})	
			.when('/cierre/:id', {
				controller: 'CierreController',
				templateUrl: 'templates/cierre.html'
				})			
	

	//$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}]);
