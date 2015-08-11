angular.module('starter.services', [])

.factory('Images', function() {
  // Might use a resource here that returns a JSON array

  // var creatures = [
  //   {
  //     id: 0,
  //     name: 'Reading',
  //     gif: '/img/pet_rock__x3_readLeft_x1_readPageTurn_quality10_loop_1355433935.gif'
  //   },
  //   {
  //     id: 1,
  //     name: 'ReadBreak',
  //     gif: '/img/pet_rock__x2_readLeft_x1_readBreak_x1_readBreakTalk_x1_readResume_quality10_loop_1355434031.gif'
  //   },
  //   {
  //     id: 2,
  //     name: 'SpeedRead',
  //     gif: '/img/pet_rock__x1_speedRead_quality10_loop_1355433966.gif'
  //   }
  // ]


  // Some fake testing data
  var food = [{
    id: 0,
    name: 'Sandwich',
    location: '/img/sammich.png'
  }, {
    id: 1,
    name: 'Rice',
    location: '/img/fried_rice__x1_iconic_png_1354829839.png'
  }];

  return {
    // pet: function() {
    //   return creatures;
    // },
    foodList: function() {
      return food;
    }
  };
});
