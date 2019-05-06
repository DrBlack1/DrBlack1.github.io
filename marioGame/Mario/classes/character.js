class Character {
  constructor(name, powerUp) {
    this._name = name;
    this._powerUp = powerUp;
    this._moves = [];
    this._hitPoints = 10;
    this._healthPoint = 100;
  }
  get name() {
    this._name;
  }
  pickMoves(move) {
    this._moves.push(...move);
  }
  powerUpMove() {
    if(this._healthPoint > 0 && this._powerUp) {
      this._hitPoints += 5
    }
  }
}


module.exports = Character;