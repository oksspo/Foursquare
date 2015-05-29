(function() {
    'use strict';

    angular.module('ngFoursquareApp').directive('places', function(){
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: true,
            templateUrl: 'js/common/directives/places/places.tpl.html',
            link: function(scope, element, attrs){
                scope.filterQuery = '';
                scope.selectedIndex = 0;
                scope.selectedPlace = scope.places[0];

                // Filter for places
                scope.filterPlaces = function(item){
                    return item.name.toLowerCase().indexOf(scope.filterQuery.toLowerCase())>=0;
                };

                // Select place and open details
                scope.selectPlace = function(index){
                    scope.selectedPlace = scope.limitedPlaces[index];
                    scope.selectedIndex = index;
                };

                // Pagination
                scope.totalItems = scope.places.length;
                scope.itemsPerPage = 10;
                scope.currentPage = 1;

                scope.maxSize = 5;
                scope.bigTotalItems = 175;
                scope.bigCurrentPage = 1;

                scope.pageCount = function () {
                    return Math.ceil(scope.places.length / scope.itemsPerPage);
                };

                scope.$watch('currentPage + itemsPerPage', function() {
                    var begin = ((scope.currentPage - 1) * scope.itemsPerPage),
                        end = begin + scope.itemsPerPage;
                    scope.limitedPlaces = scope.places.slice(begin, end);
                });
            }
        };
    });
})();