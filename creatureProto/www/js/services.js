angular.module('starter.services', [])

.factory('Images', function() {
  // Might use a resource here that returns a JSON array

  var creatures = [
    {
      id: 0,
      name: 'Reading',
      gif: '/img/pet_rock__x2_readLeft_x1_readBreak_x1_readBreakTalk_x1_readResume_quality10_loop_1355434031.gif'
    }
  ]


  // Some fake testing data
  var images = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: '/img/pet_rock__x2_readLeft_x1_readBreak_x1_readBreakTalk_x1_readResume_quality10_loop_1355434031.gif'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return images;
    },
    pet: function() {
      return creatures;
    },
    remove: function(image) {
      images.splice(images.indexOf(image), 1);
    },
    get: function(imageId) {
      for (var i = 0; i < images.length; i++) {
        if (images[i].id === parseInt(imageId)) {
          return images[i];
        }
      }
      return null;
    }
  };
});
