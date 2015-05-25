(function(){
    'use strict';

    angular.module('ngFoursquareApp')
        .controller('MainCtrl', function($scope, foursquareApiService) {
            $scope.nearBy = 'Kharkiv';

        $scope.search = function () {
            $scope.places = foursquareApiService.places({
                near: $scope.nearBy,
                query: $scope.query
            });
            console.log($scope.places);
        };
    })
})();