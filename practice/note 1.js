
// absolute beginner

// 1. find maximum number

var max = Math.max(1, 2, 3);
console.log(+ max);

// 2 .find kilo meter into meter and centimeter

  function convertKilometerIntoMeter(meters){
        return kiloMeters *1000
};
 const kiloMeters= 2
  const meters = convertKilometerIntoMeter(kiloMeters)
  console.log(+meters);

// 3. find nth value 
let N = 18


let Nth;

if (N <= 0) {
  Nth = 0;
} else if (N >= 0) {
  Nth = N * N;
}

console.log(+Nth);

//4. find nth value 

  const n = 5

  for (let i = n; i <= n; i++) {
    console.log(i);
}
  
//5. find interest percentage

let p = 1000
let t = 2
let r = 5

let all = (p * t * r / 100).toFixed(2)
console.log(all) 


// how to find separate value odd and even
// Ex. 6

let arr2 = [23, 44, 55, 66, 78, 89, 53, 40];

let newArr = arr2.map(function (value) {
  let odd = "odd";
  let even = "even";
  if (value % 2 == 0) {
    return value + odd;
  } else {
    return value + even;
  }
});

console.log(newArr);
console.log(...arr2.filter((item) => item % 2 === 0));
console.log(...arr2.filter((item) => item % 2 == 1));


// find sum of array

let arr6 = "124".split("").map(Number);

const sum1 = arr6.reduce((accum, value) => accum + value, 0);

console.log(sum1);


// ARRAY

// (i) remove dublicate in array;

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// (ii) find smallest number of array
// see the codecatta array

// (iii) 