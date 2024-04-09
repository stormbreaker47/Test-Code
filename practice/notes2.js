


// let num = 10;
// let num1 = 22;
// let num2 = 33;
// sum = num + num1 + num2;
// console.log(`num + num2 + num1 = sum`);
// console.log(`${num} + ${num1} + ${num2} = ${sum}`);

// const multiply = (num) => (num * 2)

// let arr = [2, 3, 4, 5, 6, 7]
// num = arr.map(multiply)
// console.log(num)

// let strArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let result = strArr.map(function (value, index, array) {
//     console.log(value, index, array);
//     return value % 2 == 0;

// });
// console.log(...result);

// let arr2 = [23, 44, 55, 66, 78, 89, 53, 40]

// let newArr = arr2.map(function(value){
//   let odd = "odd";
//   let even = "even";
//   if (value % 2 == 0) {
//     return value +  odd;
//   } else {
//     return value +  even;
//   }
// });

// console.log(newArr);
// function reactancle(leanth, width) {
//   return leanth * width;
// }
// console.log(reactancle(3, 5));

// function ghops(num4) {
//     return num4 * 5

// }
// let arr5 = [2, 3, 4, 5, 7, 7, 8];

// console.log(arr5.map(ghops))

// let arr6 = [22, 33, 44, 55, 66, 77];

// const result7 = arr6.map(function (value, index, Array) {
//     console.log(value, Array, index);
//     return value * index

// });

// console.log(result7);

// console.log(...result7);

// let dr = [2, 3, 4, 5, 6, 7, 8]
// function add(value1, value2) {
//     return value1 + value2
// }

// const sr = dr.reduce(add)
// console.log(sr)

// let arr8 = [22, 34, 56, 78, 90, 2, 3, 5, 7, 9, 3, 4, 7]
// const oddOrEven = arr8.map(arr8=>arr8%2==0? "odd":"even")

// console.log(oddOrEven)

// const result = arr.reduce((accum, value, index, array) => accum * value)
// console.log(result)

let arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];
const result1 = arr1.reduce(
  (accum, value) => {
    if (accum.max < value) {
      accum.max = value;
    }
    if (accum.min > value) {
      accum.min = value;
    }
    return accum;
  },
  {
    max: arr1[0],
    min: arr1[0],
  }
);
console.log(result1);

// let arr = [23, 5, 7, 8, 93, 56, 7]
// function add(value1, value2) {
//     return value1 + value2
// }
// const result = arr.map(reduce);
// console.log(result);

// const arr3 = [34, 66, 88, 66, 76, 53, 23, 55];

// let isOddOrEven = (num) => {
//   if (num % 2 === 0) {
//     return { value: num, oddOrEven: "odd" };
//   } else {
//     return {
//       value: num,
//       oddOrEven: "Even",
//     };
//   }
// };

// const mapResult = arr3.map(isOddOrEven);
// console.log(mapResult);

// console.log(mapResult.filter((item) => item.oddOrEven === "odd"));
// console.log(mapResult.filter((item)=> item.oddOrEven === "even"));

let arr = [
  1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 7, 8,
];

const obj = arr.reduce((acc, curr) => {
  if (acc[curr] == undefined) {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
    return acc;
}, {});

console.log(obj);
