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

                scope.filterPlaces = function(item){
                    return item.name.toLowerCase().indexOf(scope.filterQuery.toLowerCase())>=0;
                };
                scope.selectPlace = function(index){
                    scope.selectedPlace = scope.places[index];
                    scope.selectedIndex = index;
                }
            }
        };
    });
})();