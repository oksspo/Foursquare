(function(){
    'use strict';

    angular.module('ngFoursquareApp')
        .controller('MainCtrl', ['foursquareApiService', function($scope, foursquareApiService) {
            $scope.nearBy = 'Kharkiv';

        $scope.search = function () {
            $scope.places = foursquareApiService.places({
                near: $scope.nearBy,
                query: $scope.query
            });
        };
    }])
})();