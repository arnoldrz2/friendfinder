// Path Dependency
var path = require('path');

// Import Friends from friendsArray (friends.js)
var friends = require('../data/friends.js');

// Export API Routes
module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
          res.json(friends);
  });

  


};
