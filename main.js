// QUERYSELECTORS //
var gameGrid = document.querySelector('.game')
var displayPlayerTurn = document.querySelector('.players-turn')
var firstPlayerScore = document.querySelector('.player-one-score')
var secondPlayerScore = document. querySelector('.player-two-score')
var gameGridSpaces = document.querySelectorAll('.space')
var gameStatus = document.querySelector('.game-status-message')

// EVENT LISTENERS //
gameGrid.addEventListener('click', playTheGame)

// GLOBAL VARIABLE //
var ticTacToe = new Game();

 // FUNCTIONS //

function playTheGame(event) {
  show(displayPlayerTurn);
  for (var i = 0; i < gameGridSpaces.length; i++) {
    if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerOne && gameGridSpaces[i].innerText === "") {
        gameGridSpaces[i].innerHTML += `<img class="luigi-first-player" src="assets/icons8-luigi.svg" alt="luigi icon" />`
        ticTacToe.trackBoardData([i]);
      } else if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerTwo && gameGridSpaces[i].innerText === "") {
        gameGridSpaces[i].innerHTML += `<img class="mario-second-player" src="assets/icons8-super-mario.svg" alt="super mario icon" />`
        ticTacToe.trackBoardData([i]);
      }
    }
    ticTacToe.checkForWin();
    ticTacToe.updateActivePlayer();
    displayActivePlayer();
    displayWinner();
    updatePlayerWins();
    displayDraw();
  }

 function displayWinner() {
   if (ticTacToe.playerOne.wins > ticTacToe.playerTwo.wins) {
     console.log("winner!")
     gameStatus.innerText = `${ticTacToe.playerOne.id} wins!`
   } else if ( ticTacToe.playerTwo.wins > ticTacToe.playerOne.wins) {
     gameStatus.innerText = `${ticTacToe.playerTwo.id} wins!`
   }
 }

function displayActivePlayer() {
  displayPlayerTurn.innerText = `It's ${ticTacToe.activePlayer.id}'s turn!`
}

function updatePlayerWins() {
  firstPlayerScore.innerHTML = `
    <h1>${ticTacToe.playerOne.wins}</h1>
  `
  secondPlayerScore.innerHTML = `
    <h1>${ticTacToe.playerTwo.wins}</h1>
  `
}

function displayDraw() {
  if (ticTacToe.draw === true) {
    gameStatus.innerText = 'Tie!'
  }
}


function restartGame() {

}

// set timeout - 5000



function hide(element) {
    element.classList.add('hidden');
  }

  function show(element) {
    element.classList.remove('hidden');
  }
