//GAME STATE 7
demo.state7 = function(){};
demo.state7.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#a6ff4d";
		addChangeStateEventListener();
		console.log("state 7");

	}, 
	update: function(){}   //update frame of the game
};