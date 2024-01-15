// function one
function sum(num1, num2) {
  let total = num1 + num2;
  return total;
}
console.log(sum(5, 5));

// function 2
let word = "JavaScript";
function print() {
  console.log(word);
  console.log(word[0]);
  console.log(word.length);
  console.log(word[word.length - 1]);
}
print();

// function 3
function name(name, age) {
  return `Hello my name is ${name} and my age is ${age}`;
}
console.log(name("Oscar", "Moran"));

// function 4
function calculate(value) {
  let answer;
  switch (value) {
    case 1:
      answer = 1;
      break;
    case 2:
      answer = 2;
      break;
    case 3:
      answer = 3;
      break;
    default:
      answer = "Learn more JavaScript";
  }
  return answer;
}
console.log(calculate(1));
