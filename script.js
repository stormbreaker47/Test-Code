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



//const length = 5;
//const width = 3;
// named functions
function reactancle(leanth, width) {
  return(leanth*width)
}
console.log(reactancle(3, 5));

// anaonymous functions 

const ancle = function (leanth, width) {
  return (leanth - width);
};

console.log(reactancle(3, 5));
console.log(ancle(3, 5));

// arrow function

const ancle1 = (leanth, width) => leanth / width;

console.log(ancle1(20, 5));

(function (leanth, width) {
  console.log("iife", leanth * width);
})(3, 5);

const address = (name, age) => ({ name: name, age: age });
console.log(address("mani", 44));
