(function(){
    'use strict';

    angular.module('ngFoursquareApp')
        .constant('appConfig', {
            api: {
                baseURL: 'https://api.foursquare.com/v2',
                clientId: 'TGKYTKHUXYS0RG0TEBEW5RZEWBH4F5VV45RSCWS4FHHUGNNR',
                clientSecret: 'OF0PQYISZUXWNYGWONLGRZ5FLO4TKL0GOI2OYSYGHSQVL55L',
                version: '20130815'
            }
        });
})();