angular.module('skmt.models.devices', [])
    .service('DevicesModel', function() {
        var model = this;
        var devices = [
            {"id": 0, "name": "cisco 2811", "ip": "192.168.100.30"},
            {"id": 1, "name": "cisco 7200", "ip": "192.168.100.31"},
            {"id": 2, "name": "juniper", "ip": "192.168.100.32"}
        ];

        model.getDevices = function () {
            return devices;
        }
    })

;
