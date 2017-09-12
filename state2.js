//GAME STATE 2
demo.state2 = function(){};
demo.state2.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#80ff80";
		addChangeStateEventListener();
		console.log("state 2");

	}, 
	update: function(){}   //update frame of the game
};