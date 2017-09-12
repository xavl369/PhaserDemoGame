//GAME STATE 6
demo.state6 = function(){};
demo.state6.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#80ff80";
		addChangeStateEventListener();
		console.log("state 6");

	}, 
	update: function(){}   //update frame of the game
};