angular.module('starter.controllers', ['ngDraggable', 'firebase'])

.controller('PetCtrl', function($scope, Images) {
  $scope.myVar = false;
  // $scope.creatures = Images.pet();
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
 };

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


.controller('QuestionsCtrl', function($scope, QuestionFactory) {
  
  $scope.items = QuestionFactory;
    
    $scope.addQuestion = function(){ 
      $scope.items.$add({
      question: $scope.items.question, 
      answer: $scope.items.answer,
      date: Date.now()
    });
    
  };
  // $scope.setDate = function(question) {
  //   question.date = new Date();
  //   question.$save();
  // };
  // 
  // fb.$add({
  //     question: "Grapes of Wrath",
  //     answer: "John Steinbeck",
  //     date: Date.now() - 3600 * 1000 * 24 * 72 // 72 days ago
  // });
  // 

});
