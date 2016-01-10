angular.module('skmt.models.devices', [])
    .service('DevicesModel', function($http) {
        var model = this;
        var URLS = {
            FETCH: 'data/devices.json'
        }

        model.getDevices = function () {
            return $http.get(URLS.FETCH);
        }
    })

;
