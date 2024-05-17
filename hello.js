




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

const values = Object.values(mark);     // if you want only values
const keys = Object.keys(mark);         // if you want only keys

console.log(keys);
console.log(values);




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

const address = (name, age) => ({ name: name, age: age });
console.log(address("mani", 44));

// 4. IIFE Functions
//ex
(function (leanth, width) { console.log("iife", (leanth * width)) })(3, 5)



/// day 5 ( ES5 vs ES6 )

// spread operators  (...) spread operator is inside of array of all values is come out to print the values
// ex

let arr = [1, 2, 3, 4, 6, 7, 9];

console.log(...arr);

// rest operators (...) rest operator is inside of array values of balance to get add to print in single array

function sr(name, length, values) {
  console.log(name, length, values)
}

sr('sathish', 4, 1, 2, 3, 10)



// Temperal method

let num = 10;
let num1 = 22;
let num2 = 33;
sum = num + num1 + num2;
console.log(`num + num2 + num1 = sum`);
console.log(`${num} + ${num1} + ${num2} = ${sum}`);


// day 6 (OOP in JS)
// constructor
// getter & setter
// EX

class car {
  #serialNumber;
  #makeYear;
  constructor(color = "black", engine = "1.2 l turbo", model = "sedan", fueltype = "petrol", seatcount = "5", gearbox = "6speed") {
    this.color = color;
    this.engine = engine;
    this.model = model;
    this.fueltype = fueltype;
    this.seatcount = seatcount;
    this.gearbox = gearbox;
    this.isOne = false;
    this.speed = 0;
    this.fuel = 100;
   
    this.#makeYear = new Date().getFullYear()-2;
    this.#serialNumber = Math.floor(Math.random() * 1000000000);


  } engineStart() {
    if (this.isOn) {
      console.log('car is alreay on');
    } else {
      console.log('engine is starting...');
      this.isOn = true;
      console.log ('car is on')
    }
  } engineStop() {
    if (this.isOn) {
      console.log('car is stopping...');
      this.isOn = false;
      console.log('car is off');
    } else {
      console.log('car is already off')
    }
  } turnLeft() {
    if (this.isOn)
    {
      console.log('car already on');
    } else {
      console.log('car is turnleft');
      this.isOn = true;
      console.log("car is turning...");
      }
  } turnRight() {
    if (this.isOn) { 
      console.log('car is already off');
      this.isOn = false;
      console.log('car is turn right');
    } else {
      console.log('car is turn right')
    }
  } get makeYear() {
    console.log('authorized makeYear');
    return this.#makeYear;

  } get serialNumber() {
    console.log('authorized serialNumber');
    return this.#serialNumber;
  } get fuel() {
    return this.fuelLevel;

  }
  set fuel(Level) {
    if (Level < 0) {
      console.log("fuel level canot be negative");
      this.Level = 0;
    } else if (Level > 0) {
      console.log('fuel cannot be greater than negative');
      this.Level = 100;
    } else {
      this.fuelLevel = Level;
    }get(age)() {
      return new Date().getFullYear() - this.#makeYear
    }
    

  }
  }
  
  




const car4 = new car("orange", "2L", "suv", "disel", "6", "5speed");
console.log(car4);

car4.engineStart();
car4.engineStop();

car4.turnLeft();
car4.turnRight();
console.log(car4.makeYear);
console.log(car4.serialNumber);

console.log(car4.fuelLevel);
console.log(car4.age);





// Day 7. Map, Reduce,  Filter

// 1. Map   
// map() is a method of the Array object.It creates a new array by calling a function on every element of the original array and storing the results in a new array.map() returns the new array, and the original array is unchanged.

// Ex (i)

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
const multiply4 = (num) => num * 4
console.log(arr3.map(multiply4))

//Ex (ii)

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
let evenOrOdd = (num) => {
  
    if (num % 2 == 0) {
        return {evenOrOdd:
            'even',
            value: num
        }
    } else {
        return {evenOrOdd:
            'odd',
        value: num
        }
    }
}

 const result1 = arr4.map(evenOrOdd);
console.log(result1)
console.log(...result1)

// EX (iii)

let arr8 = [22, 34, 56, 78, 90, 2, 3, 5, 7, 9, 3, 4, 7]
const oddOrEven = arr8.map(arr8 => arr8 %2 == 0 ? "odd":"even")

console.log(oddOrEven)


// 2. Filter

// Filler method is given particular value only.

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
let evenOrOdd = (num) => {
  
    if (num % 2 == 0) {
        return {evenOrOdd:
            'even',
            value: num
        }
    } else {
        return {evenOrOdd:
            'odd',
        value: num
        }
    }
}

 const result2 = arr4.filter(evenOrOdd);
console.log(...result2)
console.log(result2.filter((item) => item.evenOrOdd === "odd"))
console.log(result2.filter((item)=>item.evenOrOdd==="even"))
console.log(arr4.filter((item) => item % 2 === 0));
console.log(arr4.filter((item) => item % 2 === 1));

const evenValues = arr4.filter((item) => item % 2 === 0);
const oddValues = arr4.filter((item) => item % 2 === 1);
console.log(evenValues);
console.log(oddValues);

// 3. Reduce method

// Ex. (i) how to find sum of array value

let arr = [11,22,33,44,55,66,77,88,99,10]

const result = arr.reduce((accum, value, index, array) => accum + value)
console.log(result)

// how to find a maximum value

let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10]

const result = arr.reduce((accum, value) => {
    if (accum <= value){
        return value
    } else {
        return accum
    } 

})
    
console.log(result);



// how to find minimum value
// Ex. 2

let arr1 = [11,22,33,44,55,66,77,88,99,10]
const result1 = arr.reduce((accum, value) => {
    if (accum > value) {
        return value
    } else {
        return accum
    }
    
});
console.log(result1);

// how to find maximum and minimum value
// Ex. 3

let arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];
const result1 = arr.reduce(
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

// EX. 4
// default value asign on only in accum 
// find sum of array
// Ex. (i)
let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];

const rs = arr.reduce((accum, curr) => {
  console.log(accum, curr);
  return accum + curr;
}, 100);

console.log(rs);

// Ex. (ii)

let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];

const rs = arr.reduce((accum, curr) => {
  console.log(accum, curr);
  accum.unshift(curr);
   return accum
}, []);

console.log(rs);

// Ex. (iii)

let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10];

const rs = arr.reduce((accum, curr) => {
  console.log(accum, curr);
  accum.unshift(curr);
   return accum
}, []);

console.log(rs);


