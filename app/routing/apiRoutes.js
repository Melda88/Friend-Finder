var friendList = require('../data/friends.js');
var path = require('path');

//Routes go here .
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

	app.post('/api/friends', function(req, res){
		friendList.push(req.body);
	})
};