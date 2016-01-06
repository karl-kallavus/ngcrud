var crudApp = angular.module('crudApp', []);

crudApp.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.devices = [
        {"id": 0, "name": "cisco 2811", "ip": "192.168.100.30"},
        {"id": 1, "name": "cisco 7200", "ip": "192.168.100.31"},
        {"id": 2, "name": "juniper", "ip": "192.168.100.32"},
    ];

    $scope.isCreating = false;
    $scope.isEditing = false;
    $scope.currentDevice = null;
    $scope.editedDevice = null;

    function isEditedDevice(device) {
        return $scope.editedDevice !== null && device.name === $scope.editedDevice.name;
    }

    function setEditedDevice(device) {
        $scope.editedDevice = device;

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
    }

    $scope.createDevice = createDevice;

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

    $scope.shouldShowCreating = shouldShowCreating;
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
