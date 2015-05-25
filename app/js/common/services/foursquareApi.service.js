(function(){

    "use strict";
    angular.module('ngFoursquareApp')
        .service('foursquareApiService', function($resource, appConfig){
            var url = appConfig.api.baseURL + '/venues/search';

            return $resource(url, {
                    client_id: appConfig.api.clientId,
                    client_secret: appConfig.api.clientSecret,
                    v: appConfig.api.version,
                    callback: 'JSON_CALLBACK'
                },
                {
                    places: {
                        method: 'JSONP',
                        isArray: true,
                        transformResponse: function(data){
                            return data.response.venues;
                        }
                    }
                })
        })
})();