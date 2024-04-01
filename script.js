

let str = "   Hello   ";
let trimmedStr = str.trim();
console.log(trimmedStr)

let numbers = [1, 2, 3];
numbers.forEach(function (number) {
  console.log(number);
});

const add = function (num1, num2) {
    return num1 * num2;
}

console.log(typeof add);

function find(num1, num2) {
    return num1 + num2;

}

console.log(add(6, 6))
console.log(find(6, 6))
