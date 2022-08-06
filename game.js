class Game {
  constructor () {
    this.playerOne = new Player('one', 'x');
    this.playerTwo = new Player('two', 'o');
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.startingPlayer = this.playerOne;

  }


  trackBoardData () {

  }
  changeTurns () {
    if (this.startingPlayer == this.playerOne) {
      this.startingPlayer = this.playerTwo
    } else if (this.startingPlayer == this.playerTwo) {
      this.startingPlayer = this.playerOne
    }
  }

  trackWins () {

    // Create a(n) array(s) of possible winning solutions?
    // set conditionals for probable solutions
    // returning string of "player _ wins!"
    // need to add wins to each player's board (updates # of wins)
  }
  detectDraw () {

  }

  resetGrid () {
    // set a conditional so that once a win is declared,
    // the game board resets, need to call on the trackWins() fxn
    // to update scores and tally, then clear out (change innerHTML)
  }
}


// will need two player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game









// Important aspects of the game "Tic Tac Toe":
    //
