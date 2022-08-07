class Game {
  constructor() {
    this.playerOne = new Player('one', 'x');
    this.playerTwo = new Player('two', 'o');
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.startingPlayer = this.playerOne;
  }

  changeTurns() {
    if (this.startingPlayer === this.playerOne) {
      this.startingPlayer = this.playerTwo
    } else if (this.startingPlayer === this.playerTwo) {
      this.startingPlayer = this.playerOne
    }
  }

  trackBoardData(anyIndex) {
    if (this.gameBoard[anyIndex] === "") {
      if (this.startingPlayer === this.playerOne) {
        this.gameBoard[anyIndex] = this.playerOne.token
        this.changeTurns();
      } else if (this.startingPlayer === this.playerTwo) {
        this.gameBoard[anyIndex] = this.playerTwo.token
        this.changeTurns();
      }
    }
    this.trackWins();
  }

 // when a player selects a space on the board (an index of the gameBoard array)
 // space on gameBoard is filled with corresponding player's token (x or o)
 // space becomes unavailable to next player
 // need to invoke a function looks for winning conditions


  trackWins() {
    var wins = [
// Create array(s) of possible winning solutions?
      // Horizontal Win //
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8']
      // Vertical Win //
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8']
      // Diagonal Win //
        ['2', '4', '6'],
        ['0', '4', '8']
    ]
// set conditionals for probable solutions
// need to be dynamic - they will apply to both players
// need a conditional to loop through the gameBoard array & wins array?
// need to be able to compare the gameBoard with the winning solutions
      if () {
        return 'Winner!'
      }
  }

    // returning string of "player _ wins!"
    // need to add wins to each player's board (updates # of wins)





  // detectDraw() {
  //
  // }
  //
  // resetGrid() {
  //   // set a conditional so that once a win is declared,
  //   // the game board resets, need to call on the trackWins() fxn
  //   // to update scores and tally, then clear out (change innerHTML)
  // }
}

// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game









// Important aspects of the game "Tic Tac Toe":
    //
