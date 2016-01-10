angular.module('skmt.models.devices', [])
    .service('DevicesModel', function($http) {
        var model = this;
        var URLS = {
            FETCH: 'data/devices.json'
        }

        function extract(result) {
            return result.data;
        }

        function cacheDevices(result) {
            devices = extract(result);
            return devices;
        }
        model.getDevices = function () {
            return $http.get(URLS.FETCH).then(cacheDevices);
        }
    })

;
