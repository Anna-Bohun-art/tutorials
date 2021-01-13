$(document).ready(function() {
	const initialPlayerPosition = 10;
	const stepInPix = 10;
	const Direction = {
		UP = "up",
		DOWN = "down"
	}

	function createBoard(player1, player2) {
		$( "body" ).on('keydown', function(event) {
			if(event.keyCode == player1.keyUp) {
				console.log(player1);
				let newPos = player1.position - stepInPix;
				player1.position = newPos;
				$('.player1').css("top", newPos +"px");
				event.preventDefault();
			} else if(event.keyCode == player1.keyDown) {
				let newPos = player1.position + stepInPix;
				player1.position = newPos;
				$('.player1').css("top", newPos +"px");
				event.preventDefault();
			}
		});
	}

	function colisionDetection() {

	}

	function updatePosition(player, direction) {

	}

	function boardPlayer(playerId, keyUp, keyDown) {
		$('.gameboard').append('<div class="'+playerId+'"></div>');
		this.playerId = playerId
		this.element = $('.'+playerId);
		this.position = initialPlayerPosition;
		this.keyUp = keyUp;
		this.keyDown = keyDown;
	}

	function boardBall() {
		$('.gameboard').append('<div class="ball"></div>');
	}

	function startGame() {
		let player1 = new boardPlayer("player1", 38, 40);
		let player2 = new boardPlayer("player2", 55, 55);
		let ball = new boardBall();
		createBoard(player1, player2);
	}
	
	function restartGame() {
		// TODO
	}

	startGame();

});