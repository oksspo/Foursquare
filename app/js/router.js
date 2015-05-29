(function() {
    'use strict';

    angular.module('ngFoursquareApp')
        .config(function($stateProvider, $locationProvider, $urlRouterProvider){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'MainCtrl',
                    templateUrl: 'js/modules/main/main.tpl.html',
                    authenticate: true
                })
                .state('login', {
                    url: 'login',
                    controller: 'LoginCtrl',
                    templateUrl: 'js/modules/login/login.tpl.html',
                    authenticate: true
                })
                .state('profile', {
                    url: 'profile',
                    controller: 'ProfileCtrl',
                    parent: 'home',
                    templateUrl: 'js/modules/profile/profile.tpl.html',
                    authenticate: true
                })
                .state('places', {
                    url: 'places',
                    controller: 'PlacesCtrl',
                    parent: 'home',
                    templateUrl: 'js/modules/places/places.tpl.html',
                    authenticate: true
                })

        })

})();