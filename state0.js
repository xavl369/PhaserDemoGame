//GAME STATE 0
var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, adam, speed = 4;

demo.state0 = function(){};
demo.state0.prototype = {

	preload: function(){ //only call once (loading images)
		game.load.image("adam", "assets/sprites/adam.png");

	}, 
	create: function(){  //setting initial values for everything in the game state
		game.stage.backgroundColor = "#800080";
		//Event listeners are LOCAL to the state                                      
		//game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
		addChangeStateEventListener();

		//Resize Window
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		//add iamge
		adam = game.add.sprite(centerX, centerY, "adam");
		//adam.anchor.x = 0.5;
		//adam.anchor.x = 0.5;
		adam.anchor.setTo(0.5, 0.5);
		console.log("state0");

	}, 
	update: function(){ //update frame of the game

		if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			adam.x += speed;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			adam.x -= speed;
		}

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			adam.y -= speed;
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			adam.y += speed;
		}

	}   
};

//are GLOBAL
function changeState(i, stateNum){
	game.state.start('state' + stateNum);
	//console.log(i);
}

function addKeyCallback(key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListener(){
	addKeyCallback(Phaser.Keyboard.ZERO,changeState, 0);
	addKeyCallback(Phaser.Keyboard.ONE,changeState, 1);
	addKeyCallback(Phaser.Keyboard.TWO,changeState, 2);
	addKeyCallback(Phaser.Keyboard.THREE,changeState, 3);
	addKeyCallback(Phaser.Keyboard.FOUR,changeState, 4);
	addKeyCallback(Phaser.Keyboard.FIVE,changeState, 5);
	addKeyCallback(Phaser.Keyboard.SIX,changeState, 6);
	addKeyCallback(Phaser.Keyboard.SEVEN,changeState, 7);
	addKeyCallback(Phaser.Keyboard.EIGHT,changeState, 8);
	addKeyCallback(Phaser.Keyboard.NINE,changeState, 9);

}