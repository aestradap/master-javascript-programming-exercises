// Write your function here
const isOdd = (number) => {
    return number % 2 != 0;
}

const areBothOdd = (number1, number2) => {
    return isOdd(number1) && isOdd(number2);
}


let output = areBothOdd(1, 3);
console.log(output);
