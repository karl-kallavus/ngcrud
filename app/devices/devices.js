angular.module('devices', [
    'skmt.models.devices',
    'devices.create',
    'devices.edit'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('skmt.devices', {
                url: '/',
                views: {
                    'devices@': {
                        controller: 'DevicesListCtrl as devicesListCtrl',
                        templateUrl: 'app/devices/devices.tmpl.html'
                    }
                }
            })
    })
    .controller('DevicesListCtrl', function(DevicesModel) {
        var devicesListCtrl = this;

        DevicesModel.getDevices()
            .then(function(result) {
                devicesListCtrl.devices = result;
                console.log('result', result);
            });
    })
;
