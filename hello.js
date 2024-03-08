




// This is day 3 class practice.

console.log("welcome");

let num = 20;
console.log(num);
num = num + 40;
console.log("after", num);

// Array
// How to find a length of array // console.log(arr,arr.length)
// how to add a last value in array // arr.push(77) , arr[arr.length] = 88
// how to remove a last value in array // arr.pop()
//
let arr = [30, 45, 75, 85, 85, 45];
console.log(arr);
arr[arr.length] = 88;
console.log(arr);
arr.push(55); // how to add a last value in array // arr.push(77)
console.log(arr, arr.length);
arr.pop(); // how to remove a last value in array // arr.pop()
console.log(arr, arr.length);
arr.unshift(22, 55, 66); // add the value in front of the array // arr.unshift
console.log(arr, arr.length);
arr.shift(0); // // to remove the value in front of the array // arr.shift
console.log(arr, arr.length);

// Object
let mark = { tamil: 96, english: 61, maths: 59, science: 97, social: 99 };
console.log(mark.tamil);
console.log(mark.english);
console.log(mark.maths);
console.log(mark.science);
console.log(mark.social);

//const values = Object.values(mark);     // if you want only values
//const keys = Object.keys(mark);         // if you want only keys

console.log(keys);
console.log(values);

function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  console.log(this.response);
};



//// Day 4 Class
      
// functions

// 1. Named Function:

// ex
function reactancle(leanth, width) {
  return leanth * width;
}
console.log(reactancle(3, 5));

// 2. Anonymous Function:

//ex
const reactancle = function (leanth, width) {
  return(leanth - width)
}

console.log(reactancle(3, 5))

// 3. Arrow Function:
const ancle1 = (leanth, width) => (leanth % width);

console.log(ancle1(3, 5));

// 4. IIFE Functions
//ex
(function (leanth, width) { console.log("iife", (leanth * width)) })(3, 5)

// 5. 