//GAME STATE 9
demo.state9 = function(){};
demo.state9.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#ffcc66";
		addChangeStateEventListener();
		console.log("state 9");

	}, 
	update: function(){}   //update frame of the game
};