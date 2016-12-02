document.addEventListener("deviceready", onDeviceReady, false);

var j$ = jQuery.noConflict();

angular.module("root", [])
            .controller("index", ["$scope", function($scope) {
                $scope.$watch("factor", function (newValue) {
                    $scope.product = newValue * 2;
                });

                $scope.factor = 6;
            }]);
            
function onDeviceReady() {
    // alert("Device is Ready");
    console.log("Device is Ready");
    
}