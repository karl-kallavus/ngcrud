var skmtApp = angular.module('skmtApp', [
    'ui.router',
    'devices'
]);

skmtApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('skmt', {
                url: '',
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
});

skmtApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.devices = [
        {"id": 0, "name": "cisco 2811", "ip": "192.168.100.30"},
        {"id": 1, "name": "cisco 7200", "ip": "192.168.100.31"},
        {"id": 2, "name": "juniper", "ip": "192.168.100.32"},
    ];

    $scope.isCreating = false;
    $scope.isEditing = false;
    $scope.editedDevice = null;

    function isEditedDevice(deviceId) {
        return $scope.editedDevice !== null && $scope.editedDevice.id === deviceId;
    }

    function setEditedDevice(device) {
        $scope.editedDevice = angular.copy(device);

        cancelCreating();
    }

    $scope.isEditedDevice = isEditedDevice;
    $scope.setEditedDevice = setEditedDevice;

    function resetCreateForm() {
          $scope.newDevice = {
              name: '',
              ip: ''
          };
    }

    //-------------------------------------------------------------------------------------------------
    // CRUD
    //-------------------------------------------------------------------------------------------------

    function createDevice(device) {
        device.id = $scope.devices.length;
        $scope.devices.push(device);

        resetCreateForm();
        cancelCreating();
    }

    function updateDevice(device) {
        var index = _.findIndex($scope.devices, function (d) {
            return d.id == device.id;
        });
        $scope.devices[index] = device;

        $scope.editedDevice = null;
        $scope.isEditing = false;
    }

    function deleteDevice(device) {
        _.remove($scope.devices, function(d) {
            return d.id == device.id;
        });
    }

    $scope.createDevice = createDevice;
    $scope.updateDevice = updateDevice;
    $scope.deleteDevice = deleteDevice;

    //-------------------------------------------------------------------------------------------------
    // CREATING STATES
    //-------------------------------------------------------------------------------------------------

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
        $scope.currentDevice = null;

        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;

    //-------------------------------------------------------------------------------------------------
    // EDITING STATES
    //-------------------------------------------------------------------------------------------------

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
        $scope.editedDevice = null;
    }

    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;
}]);
