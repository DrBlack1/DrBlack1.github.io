const app = require('../Dice TDD/index')

test('should return a value less than 6 ',() => {
    expect(app.diceResult()).toBeLessThan(7),
    expect(app.diceResult()).toBeGreaterThan(0);
})