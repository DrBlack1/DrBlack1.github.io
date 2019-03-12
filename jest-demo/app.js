const obj = {
    namesArr: [
        'Elishka',
        'Stu',
        'Dean',
        'Andy',
        'Mati'
    ],

    sortArray: (array) => {
        return(array.sort());
    },

    splitString: string => {
        let split = string.split('');
        return split;
    },

    reArrange: word => {
        let split = word.split('');
        let ordered = split.sort();
        let joined = ordered.join('');
        return joined;
    }
}

module.exports = {
    obj
}

const app = require('../app.js')

test('should equal 5 when passed 2 and 3 are passed', () => {
    expect(app.add(2,3)).toBe(5);
});

test('should contain Patto in myArray', () => {
    expect(app.myArray).toContain("Patto");
});