//GAME STATE 3
demo.state3 = function(){};
demo.state3.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#80ff80";
		addChangeStateEventListener();
		//console.log("state 3");

	}, 
	update: function(){}   //update frame of the game
};