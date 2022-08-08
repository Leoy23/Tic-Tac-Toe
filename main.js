// QUERYSELECTORS //
var gameGrid = document.querySelector('.main-game-container')
var displayPlayerTurn = document.querySelector('.players-turn')
var firstPlayerScore = document.querySelector('.player-one-score')
var secondPlayerScore = document. querySelector('.player-two-score')
var gameGridSpaces = document.querySelectorAll('.spaces')

// EVENT LISTENERS //
gameGrid.addEventListener('click', playTheGame)

// GLOBAL VARIABLE //
var ticTacToe = new Game();

 // FUNCTIONS //

playTheGame() {
  for (var i = 0; i < gameGridSpaces[i].length; i++) {
    if (gameGridSpaces[i].id === event.target.id && ticTacToe.activePlayer === ticTacToe.playerOne &&
      gameGridSpaces.innerHTML = "") {
        gameGridSpaces[i].innerHTML = `
        <h1>${ticTacToe.playerOne.token}</h1>
        `
    }
    // will need multiple conditions
  }
}
