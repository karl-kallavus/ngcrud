angular.module('skmt.models.devices', [])
    .service('DevicesModel', function($http) {
        var model = this;
        var URLS = {
            FETCH: 'data/devices.json'
        }
        var devices;

        function extract(result) {
            return result.data;
        }

        function cacheDevices(result) {
            devices = extract(result);
            return devices;
        }
        model.getDevices = function () {
            return (devices) ? $q.when(devices) : $http.get(URLS.FETCH).then(cacheDevices);
        }

        model.getDeviceByName = function(deviceName) {
            var deferred = $q.defer();

            function findDevice() {
                return _.find(devices, function(d) {
                    return d.name == deviceName;
                })
            }

            if(devices) {
                deferred.resolve(findDevice());
            } else {
                model.getDevices()
                    .then(function(result){
                        deferred.resolve(findDevice());
                    })
            }

            return deferred.promise;
        }
    })

;
