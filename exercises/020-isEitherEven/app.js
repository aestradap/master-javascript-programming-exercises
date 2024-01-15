// Write your function here
const isEven = (number) => {
    return number % 2 === 0;
}

const isEitherEven = (number1, number2) => {
    return isEven(number1) || isEven(number2);
}

let output = isEitherEven(1, 4);
console.log(output);