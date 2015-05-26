(function() {
    'use strict';

    angular.module('ngFoursquareApp').directive('placeCard', function(){
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: true,
            templateUrl: 'js/common/directives/placeCard/placeCard.tpl.html',
            link: function(scope, element, attrs){

            }
        };
    });
})();