angular.module('starter.controllers', ['ngDraggable'])

.controller('PetCtrl', function($scope, Images) {
  $scope.myVar = false;
  $scope.creatures = Images.pet();
  $scope.food = Images.foodList();
  $scope.randomFood = [$scope.food[Math.floor(Math.random() * $scope.food.length)]]

  // $scope.onDragComplete = function(data,evt){
  //   console.log("drag success, data:", data);
  // }
  $scope.onDropComplete = function(){
    console.log("Omnomnomnom!");
  $scope.myVar = true;
   setTimeout(function ()
   {
     $scope.$apply(function()
     {
       $scope.myVar = false;
     });
   }, 1000);
  }

  $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = [
    {
    name: "Push",
    checked: true
    },
    {
    name: "Time",
    checked: true
    },
    {
    name: "Facebook"
    },
    {
    name: "Sleep",
    checked: true
    }
  ];
})


.controller('QuestionsCtrl', function($scope) {
});
