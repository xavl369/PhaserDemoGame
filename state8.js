//GAME STATE 8
demo.state8 = function(){};
demo.state8.prototype = {

	preload: function(){}, //only call once (loading images)
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#80ff80";
		console.log("state 8");
		addChangeStateEventListener();

	}, 
	update: function(){}   //update frame of the game
};