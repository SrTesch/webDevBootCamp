const team = {
    _players: [
      {firstName: 'Pedro', lastName: 'Tesch', age: 22},
      {firstName: 'Naira', lastName: 'Pereira', age: 21},
      {firstName: 'Doni', lastName: 'Junior', age: 30}
     ],
    _games: [
      {opponet: 'vida', teamPoints: 0, opponentPoints: 100},
      {opponent: 'vidros', teamPoints: 8, opponentPoints: 2},
      {opponent: 'cubos', teamPoints: 9, opponentPoints: 1}
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
      this._players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
      this._games.push(game)
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
