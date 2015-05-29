(function(){
    'use strict';

    angular.module('ngFoursquareApp')
        .controller('MainCtrl', function($scope, foursquareApiService) {
        //    $scope.nearBy = 'Kharkiv';
        //
        //$scope.search = function () {
        //    $scope.places = foursquareApiService.places({
        //        near: $scope.nearBy,
        //        query: $scope.query
        //    });
        //};
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