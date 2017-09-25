//GAME STATE 4
demo.state4 = function(){};
demo.state4.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#cc66ff";
		addChangeStateEventListener();
		//console.log("state 4");

	}, 
	update: function(){}   //update frame of the game
};