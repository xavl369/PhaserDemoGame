//GAME STATE 5
demo.state5 = function(){};
demo.state5.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#cc6699";
		addChangeStateEventListener();
		//console.log("state 5");

	}, 
	update: function(){}   //update frame of the game
};