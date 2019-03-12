const app = require('../app');

it('should sort the array alphabetically', () => {
    expect(app.obj.sortArray(app.obj.namesArr)).toEqual(
        ["Andy", "Dean", "Elishka", "Mati", "Stu" ]);
});

it('should split a string into an array', () => {
    expect(app.obj.splitString('I am Patto')).toEqual(['I', ' ', 'a', 'm', ' ', 'P', 'A', 'T', 'T', 'O']);
});

it('should rearrange codenation by alphabetical order', () => {
    expect(app.obj.reArrange('codenation')).toEqual('acdeinnoot');
});