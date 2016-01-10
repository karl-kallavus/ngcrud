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
        devicesListCtrl.devices = DevicesModel.getDevices();
    })
;
