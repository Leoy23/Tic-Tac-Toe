// QUERYSELECTORS //
var gameGrid = document.querySelector('.game')
var displayPlayerTurn = document.querySelector('.players-turn')
var firstPlayerScore = document.querySelector('.player-one-score')
var secondPlayerScore = document. querySelector('.player-two-score')
var gameGridSpaces = document.querySelectorAll('.space')

// EVENT LISTENERS //
gameGrid.addEventListener('click', playTheGame)

// GLOBAL VARIABLE //
var ticTacToe = new Game();

 // FUNCTIONS //

function playTheGame(event) {
  show(displayPlayerTurn);
  for (var i = 0; i < gameGridSpaces.length; i++) {
    if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerOne && gameGridSpaces[i].innerText === "") {
        gameGridSpaces[i].innerHTML += 'X'
        ticTacToe.trackBoardData([i]);
      } else if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerTwo && gameGridSpaces[i].innerText === "") {
        gameGridSpaces[i].innerHTML += 'O'
        ticTacToe.trackBoardData([i]);
      }
    }
    ticTacToe.checkForWin();
    ticTacToe.updateActivePlayer();
    displayActivePlayer();
  }

 function displayWinner() {

 }

function displayActivePlayer() {
  displayPlayerTurn.innerText = `It's ${ticTacToe.activePlayer.id}'s turn!`
}

function updatePlayerWins() {

}

function displayDraw() {

}
function restartGame() {

}

// set timeout - 5000



// function playTheGame(event) {
//   for (var i = 0; i < gameGridSpaces.length; i++) {
//     if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerOne && gameGridSpaces.innerHTML === "") {
//         gameGridSpaces[i].innerHTML += 'X'
//         console.log('special message!')
//       } else if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerTwo && gameGridSpaces.innerHTML === "") {
//         gameGridSpaces[i].innerHTML += 'O'
//       }
//     }
//   }

function hide(element) {
    element.classList.add('hidden');
  }

  function show(element) {
    element.classList.remove('hidden');
  }
