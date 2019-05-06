const {expect} = require('chai');
const Character = require('../classes/character.js');


describe('Character', () => {
  it('Character returns an object and a new instance', () => {
    const mario = new Character('Mario', 'Jump')
    expect(mario).to.be.an('object')
    expect(mario).to.be.an.instanceOf(Character);
  });

  it('Chracter has a number of moves', () => {
    const mario = new Character('Mario', 'Jump')
    const marioMoves = ['pipe-clean', 'flower power']
    marioMoves.push('shield')
    mario.pickMoves(marioMoves)
    expect(mario._moves[0]).to.equal('pipe-clean')
    expect(mario._moves[1]).to.equal('flower power')
    expect(mario._moves[2]).to.equal('shield')
  });

  it('The character powerup increases the hit-point by 5', () => {
    const mario = new Character('Mario', 'Jump')
    mario.powerUpMove()
    expect(mario._hitPoints).to.eql(15)
  });
})