function checkAge(name, age) {
  // your code here
  
  let msgResponse = '';
  age < 21 
    ? msgResponse = `Go home, ${name}!`
    :msgResponse = `Welcome, ${name}!`
  return msgResponse;
}
let output = checkAge('Adrian', 22);
console.log(output);