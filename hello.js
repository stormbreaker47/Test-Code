




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

// spread operators  (...)
// ex

let arr = [1, 2, 3, 4, 6, 7, 9];

console.log(...arr);

// rest operators (...)

function sr(name, length, values) {
  console.log(name, length, values)
}

sr(sathish, 4, 1, 2, 3, 10)


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


