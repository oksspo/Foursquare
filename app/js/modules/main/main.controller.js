(function(){
    'use strict';

    angular.module('ngFoursquareApp')
        .controller('MainCtrl', function($scope) {
            $scope.links = [
                {
                    sref: 'home',
                    title: 'Home'
                },
                {
                    sref: 'profile',
                    title: 'Profile'
                },
                {
                    sref: 'places',
                    title: 'Places'
                }
            ]
    })
})();