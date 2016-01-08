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
                        controller: 'DevicesCtrl',
                        templateUrl: 'app/devices/devices.tmpl.html'
                    }
                }
            })
    })
    .controller('DevicesCtrl', function($scope) {

    })
;
