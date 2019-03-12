const obj = {
    namesArr: [
        'Elishka',
        'Stu',
        'Dean',
        'Andy',
        'Mati'
    ],
    sortArray: (arr) => {
        return(arr.sort());
    },
    splitString: string => {
        let split = string.split('');
        console.log(split);
    },
    reArrange: word => {
        let split = word.split('');
        let ordered = split.sort();
        let joined = ordered.join('');
        return joined;
    }
}

modules.export = {
    sortArray: obj.sortArray,
    splitString: obj.splitString,
    reArrange: obj.splitString
}

console.log(obj.sortArray(obj.namesArr));
console.log|(obj.splitString('My name is Patto'));
console.log(obj.reArrange('codenation'))

// let myArray = ["Elishka", "Stu", "Dean", "Andy", "Mati"];


// myArray.sort();
// console.log(myArray);

