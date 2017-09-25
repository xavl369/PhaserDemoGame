//GAME STATE 1
demo.state1 = function(){};

var cursors, vel = 500, rocks, grass;


demo.state1.prototype = {

	preload: function(){ //only call once (loading images)

		game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png')
		game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png')
	}, 
	create: function(){  //setting initial values for everything in the game state
		
		//game.physics.startSystem(Phaser.Physics.ARCACDE);

		game.stage.backgroundColor = "#DDDDDD";
		addChangeStateEventListener();

		var map = game.add.tilemap('field');
		map.addTilesetImage('grassTiles');
		map.addTilesetImage('rockTiles');

		//order of creating layers matters
		grass = map.createLayer('grass');
		rocks = map.createLayer('rocks');

		map.setCollisionBetween(1,9,true, 'rocks');
		map.setCollision(11,true, 'grass');

		adam = game.add.sprite(200, 200, 'adam');
		adam.scale.setTo(0.2, 0.2);
		game.physics.enable(adam);

		cursors = game.input.keyboard.createCursorKeys();
		//console.log("state1");

	}, 
	update: function(){  //update frame of the game

		game.physics.arcade.collide(adam, rocks, function(){
			console.log('ROCK')
		});
		game.physics.arcade.collide(adam, grass, function(){
			console.log('GRASS')
		});

		if(cursors.up.isDown){
			adam.body.velocity.y = -vel;
		}
		else if(cursors.down.isDown){
			adam.body.velocity.y = vel;
		}
		else{
			adam.body.velocity.y = 0;
		}

		if(cursors.left.isDown){
			adam.body.velocity.x = -vel;
		}
		else if(cursors.right.isDown){
			adam.body.velocity.x = vel;
		}
		else{
			adam.body.velocity.x = 0;
		}

	}  
};