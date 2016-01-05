var crudApp = angular.module('crudApp', []);


crudApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.hello = 'world!';

    $scope.devices = [
        {"id": 0, "name": "cisco 2811", "ip": "192.168.100.30"},
        {"id": 1, "name": "cisco 7200", "ip": "192.168.100.31"},
        {"id": 2, "name": "juniper", "ip": "192.168.100.32"},
    ];


    $scope.isCreating = false;
    $scope.isEditing = false;
    $scope.currentDevice = null;

    function isCurrentDevice(device) {
        return $scope.currentDevice !== null && device.name === $scope.currentDevice.name;
    }

    function setcurrentDevice(device) {
        $scope.currentDevice = device;

        cancelCreating();
        cancelEditing();
    }

    $scope.isCurrentDevice = isCurrentDevice;
    $scope.setcurrentDevice = setcurrentDevice;

    //-------------------------------------------------------------------------------------------------
    // CREATING STATES
    //-------------------------------------------------------------------------------------------------
    function shouldShowCreating() {
        return !$scope.isEditing;
    }

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    $scope.shouldShowCreating = shouldShowCreating;
    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
}]);
