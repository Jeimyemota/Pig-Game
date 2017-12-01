	/*
	GAME RULES:

	- The game has 2 players, playing in rounds
	- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
	- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
	- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
	- The first player to reach 100 points on GLOBAL score wins the game

	*/

	var scores, roundScore, activePlayer, gamePlaying;

	init();

	document.querySelector('.btn-roll').addEventListener('click', function() {
		if (gamePlaying){

		//1. Random number
		var dice = Math.floor(Math.random()*6) + 1;
		var dice2 = Math.floor(Math.random()*6) + 1;

		//2. Display Result
		var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-' + dice + '.png';
		var diceDOM2 = document.querySelector('.dice2');
			diceDOM2.style.display = 'block';
			diceDOM2.src = 'dice-' + dice2 + '.png';



		//3. Update the Round score IF the rolled number was not a 1
		if (dice !== 1, dice2 !== 1){
			//add score
			roundScore += dice;
			roundScore += dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {

	//		//next player
	//		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	//		//? means then and : means if
	//		roundScore = 0;
	//		
	//		//code below allows the current score to be 0
	//		document.getElementById('current-0').textContent = '0';
	//		document.getElementById('current-1').textContent = '0';
	//		
			//code below removes the active class
			//document.querySelector('.player-0-panel').classList.remove('active');

			//code below adds the active to player 2
			//document.querySelector('.player-1-panel').classList.add('active');

			//the toggle allows it to switch back and forth between players. So if player 1 reaches 0 then its player 2's turn. and vice versa

			//4. IF the number rolled was 1, current score is set to 0.

	//		document.querySelector('.player-0-panel').classList.toggle('active');
	//		document.querySelector('.player-1-panel').classList.toggle('active');
	//
	//		//makes die disappear
	//		document.querySelector('.dice').style.display = 'none';
			nextPlayer();	

		}
			

		}
	});



	document.querySelector('.btn-hold').addEventListener('click', function () {
		if (gamePlaying){
			//add current score to global score
		scores[activePlayer] += roundScore;

		//update UI to display overal score
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


		//check if player won game
		if (scores[activePlayer] >= 100){
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;

		} else {
			nextPlayer();
			}
		}
	});

	function nextPlayer(){
		//next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			//? means then and : means if
			roundScore = 0;

			//code below allows the current score to be 0
			document.getElementById('current-0').textContent = '0';
			document.getElementById('current-1').textContent = '0';

			//the toggle allows it to switch back and forth between players. So if player 1 reaches 0 then its player 2's turn. and vice versa


			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			//makes die disappear
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
	}

	document.querySelector('.btn-new').addEventListener('click', init);

	function init(){
		scores = [0,0];
		roundScore = 0;
		activePlayer = 0; 
		gamePlaying = true;

		//allows us to use DOM. querySelectors allows us to select elements from our webpage.  It allows us to select things like we do in css. Only selects first elements it finds.  

		//textContent allows us to insert above code. 
		//document.querySelector('#current-' + activePlayer).textContent = dice;


		//innerHtml allows us to change something within the HTML itself. like font style
		//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'


		//code below changes the css in the DOM
		document.querySelector('.dice',).style.display = 'none';
		document.querySelector('.dice2',).style.display = 'none';
		//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

		//Events: Notifications that are sent to notify the code that something happened on the webpage. Examples are clickling the button resizing a window, scrolling down or up, pressing a key..; An event listener is a function that performs an action based on a certain event. It waits fore a specific event to happen. 
		//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

		//reset the game to 0
		document.getElementById('score-0').textContent = '0';
		document.getElementById('score-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		//reset player names (if they won) back to original
		document.getElementById('name-0').textContent = 'Player 1';
		document.getElementById('name-1').textContent = 'Player 2';
		//removing the style from the winner from both players. also removing the active dot from both players. then adding it to player one when the game resets.
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');

		document.querySelector('.player-0-panel').classList.add('active');

	}