// Write your function here

const isOddLength = (word) => {
    return  word.length % 2 != 0;
}

let output = isOddLength('special');
console.log(output);