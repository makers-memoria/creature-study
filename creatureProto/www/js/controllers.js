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

.controller('ChatsCtrl', function($scope, Images) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.images = Images.all();
  $scope.remove = function(image) {
    Images.remove(image);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
