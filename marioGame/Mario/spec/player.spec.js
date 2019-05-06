const {expect} = require('chai');
const Player = require('../classes/player.js');
const Character = require('../classes/character.js');

describe('Player', () => {
  it('Player returns an object and a new instance', () => {
    const elliot = new Player('Ellisot')
    expect(elliot).to.be.an('object')
    expect(elliot).to.be.an.instanceOf(Player)
  })
  it('Player object contains a method to store the characters', () => {
    const elliot = new Player('Elliot')
    const mario = new Character('Mario', 'Jump')
    const princessPeach = new Character('Princess Peach', 'Flower')
    elliot.pickCharacter(mario);
    elliot.pickCharacter(princessPeach);
    expect(elliot._pick[0]._name).to.equal('Mario');
    expect(elliot._pick[1]._name).to.equal('Princess Peach');
  })
})

