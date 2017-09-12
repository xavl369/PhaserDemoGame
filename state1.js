//GAME STATE 1
demo.state1 = function(){};
demo.state1.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#DDDDDD";
		addChangeStateEventListener();
		console.log("state1");

	}, 
	update: function(){}   //update frame of the game
};