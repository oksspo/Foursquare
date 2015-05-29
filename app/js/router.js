(function() {
    'use strict';

    angular.module('ngFoursquareApp')
        .config(function($stateProvider, $locationProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    controller: 'MainCtrl',
                    templateUrl: 'js/modules/main/main.tpl.html'
                })
                .state('login', {
                    url: 'login',
                    controller: 'LoginCtrl',
                    templateUrl: 'js/modules/login/login.tpl.html'
                })
                .state('profile', {
                    url: 'profile',
                    controller: 'ProfileCtrl',
                    parent: 'home',
                    templateUrl: 'js/modules/profile/profile.tpl.html'
                })
                .state('places', {
                    url: 'places',
                    controller: 'PlacesCtrl',
                    parent: 'home',
                    templateUrl: 'js/modules/places/places.tpl.html'
                })

        })

})();