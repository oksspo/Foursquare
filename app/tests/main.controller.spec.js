describe('MainCtrl', function() {
    var httpBackend, scope, ctrl, placesData;

    beforeEach(module('ngFoursquareApp'));

    beforeEach(inject(function($controller, $rootScope, $httpBackend){
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('PlacesCtrl', {$scope: scope});

        placesData = [
            {name: 'place #1'},
            {name: 'place #2'}
        ];

        httpBackend
            .whenJSONP(/\/venues\/search/)
            .respond({
                response: {
                    venues: placesData
                }
            })
    }));

    it('should set places while searching', function(){
        scope.nearBy = 'Kharkiv';
        scope.query = 'bar';

        scope.search();

        httpBackend.flush();
        expect(scope.places.length).toEqual(2);
    })
});