 


// codekatta

// how to find this add or even number

let num = 35
num = num / 2
if (num == 0) {console.log("this is even Number", num)
    
}
else{console.log("this is add number", num)}


// how to find greaterthan and lesserthan

let num1 = 34
let num2 = 4
// let num = num1 + num2
console.log(num1 + num2)
if (num + num1 > num1) { console.log("positive") }
else { console.log("negative") }

// using not gate(!)

console.log(!(4)) // This is only given opposite value

// using or gate(||)
// This or gate is check one by one value, if first value is correct they give output incase first value is not correct this checking next value. 
//EX. 1
let r1 = 55
if (r1%10 == 0 || r1%5 == 0) { console.log("the value r1 is divied") }
else{console.log("the value r1 is not divided")}

// EX.2
let r2 = 10
if (r2 % 8 == 0 || r2 % 7 == 0) { console.log("the value is positive") }
else {console.log("the value is negative")}

// AND gate (&&)
// And gate is both value is correct only they give a output, otherwise they not give a output.
// EX
 
let r4 = 44
if (r4 % 2 == 0 && r4 % 4 == 0) { console.log("the value is correct") }
else { console.log("the value is not correct") }

let r5 = 44;
if (r5 % 2 == 0 && r5 % 5 == 0) {
  console.log("the value is correct");
} else {
  console.log("the value is not correct");
}

// checking maild id and password
//EX.1 
const mailId = "sathish@gmail.com"
const passId = "sk@47"

let mailID = "XYZ@gmail.com"
let passID = "sk@47"

if (mailId == mailID && passId == passID) { console.log("authorized") }
else { console.log("unauthorized") }

//EX.2
const mail = "sathish@gmail.com";
const pass = "sk@47";

let mail1 = "sathish@gmail.com";
let pass1 = "sk@47";

if (mail === mail1 && pass === pass1) {
  console.log("authorized");
} else {
  console.log("unauthorized");
}

// +value (it means to string to convert number)
// ++ (It mean to add a value)
// -- ( It mean value subtract)
// %
//*

//EX.1

let n = 0
n += 25
console.log(n)

//EX.2

let n1 = 0
n1 += 2*4
console.log(n1)

// else if or lader if else condition
// else if is checking one condition if false then checking next condition thid condition also false then checking another condition all are false then else given
// EX.1 

let x = 10;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}



//Ex.2


let age = 26;

if (age <= 18) {
  console.log("minor");
} else if (age >= 18 && age <= 56) {
  console.log("adult");
} else if (age >= 56 && age <= 77) {
  ("old person");
} else {
  console.log("passed away");
}

// Ex.3 

let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing cold outside!");
} else if (temperature >= 0 && temperature < 10) {
  console.log("It's very cold outside.");
} else if (temperature >= 10 && temperature < 20) {
  console.log("It's cold outside.");
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's warm outside.");
} else {
  console.log("It's hot outside!");
}

// Ex.4

let mathMarks = 67;
let scienceMarks = 56;
let englishMarks = 77;

let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100;
let grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Total Percentage: " + percentage.toFixed(2) + "%");
console.log("Your Grade: " + grade);


// nested if condition
// this type of codition inside one if to inside another if and else inside to another else

//EX.1

let age = 31;
let country = "usa";

if (country === "usa") {
  if (age >= 18) {
    console.log("You are eligible to vote in the upcoming election.");
  } else {
    console.log("You are not eligible to vote in the upcoming election.");
  }
} else if (country === "uk") {
  if (age >= 16) {
    console.log("You are eligible to vote in the upcoming election.");
  } else {
    console.log("You are not eligible to vote in the upcoming election.");
  }
} else if (country === "canada") {
  if (age >= 21) {
    console.log("You are eligible to vote in the upcoming election.");
  } else {
    console.log("You are not eligible to vote in the upcoming election.");
  }
} else {
  console.log(
    "You are not eligible to vote in the upcoming election due to your country of residence."
  );
}


// Loop

// While Loop condition

//EX.1

let num = 1;
while (num <= 10) {
  console.log("inside", num);
  num++;
}
console.log("outside", num);

// Do while loop condition
// Ex.1 

let i = 2
do {
  console.log("inside", i);
  i++;
}
while (i <= 10)
console.log("outside", i)

// For Loop
// EX.1

for (k = 10; k < 100; k += 10) {
  console.log(k);
}

// EX.2

for (start = 100; start <= 1000; start++) {
  if (start % 2 == 1) {
    console.log(start);
  }
}

