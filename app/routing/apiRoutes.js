// Path Dependency
var path = require('path');

// Import Friends from friendsArray (friends.js)
var friends = require('../data/friends.js');

// Export API Routes
module.exports = function(app) {
  // Get all current Friend info
  app.get('/api/friends', function(req, res) {
          res.json(friends);
  });

  // Add new friend
  app.post('/api/friends', function(req, res) {
    // Capture user input object
    var userInput = req.body;

    var userResponses = userInput.scores;

    // Calculate Friend Match
    var matchName = '';
    var matchImg = '';
    var totalDiffernce = 10000;

    // Reference existing friends list
    for (var i = 0; i < friends.length; i++) {

      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }

      if (diff < totalDiffernce) {

        totalDiffernce = diff;
        matchName = friends[i].name;
        matchImg = friends[i].photo;
      }
    }
    // Add new user
    friends.push(userInput);

    // Send response
    res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
  });
};
