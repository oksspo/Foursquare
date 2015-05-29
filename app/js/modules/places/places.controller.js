(function() {
    'use strict';

    angular.module('ngFoursquareApp')
        .controller('PlacesCtrl', function ($scope, foursquareApiService) {
            $scope.nearBy = 'Kharkiv';

            $scope.search = function () {
                $scope.places = foursquareApiService.places({
                    near: $scope.nearBy,
                    query: $scope.query
                });
            };
        })
})();