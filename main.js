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

function playTheGame() {
  for (var i = 0; i < gameGridSpaces[i].length; i++) {
    if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerOne && gameGridSpaces.innerHTML === "") {
        gameGridSpaces[i].innerHTML = `
        <h1>${ticTacToe.playerOne.token}</h1>
        `
      } else if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer === ticTacToe.playerTwo && gameGridSpaces.innerHTML === "") {
        gameGridSpaces[i].innerHTML = `
        <h1>${ticTacToe.playerTwo.token}</h1>
        `
      }
    }
    console.log(event.target.id)
    console.log("Is this working?")
  }
