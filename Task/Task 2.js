
// anonymous function & IIFE
// print odd numbers

//(1)

let sr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOoddNumbers = function (sr) {
  for (let i = 0; i < sr.length; i++) {
    if (sr[i] % 2 !== 0) {
      console.log(sr[i]);
    }
  }
};

console.log(printOoddNumbers(sr));

//(2)

// sum of all array

let arr = [1, 2, 3, 4, 5, 67, 8, 8, 0]

const sum = function (arr) {

  let n = 0;
  arr.forEach(function (num) {
    n += num;
  });
    
   console.log (n); 
  }
  
console.log(sum(arr));

// (3)
// // prime numbers

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const findPrimes = function (arr) {
  let primes = [];

  // Function to check if a number is prime
  const isPrime = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Loop through the array and find prime numbers
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primes.push(arr[i]);
    }
  }

  return primes;
};

console.log(findPrimes(arr));


// (4)
// /// remove duplicates

let arr = [1, 2, 3, 5, 6, 8, 9, 1, 2, 3, 5, 6, 7, 8]
const removeduplicate = function (arr) {
  return arr.filter(function (ele, index) {
    return arr.indexOf(ele) == index;
  });
}


console.log(removeduplicate(arr));

// (5)
// // palindrome numbers

let sr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const isPalindrome = function (num) {
  let reversednum = parseInt(num.toString().split("").reverse().join(""));
  return num === reversednum;
};

const findPalindromeNumbers = function (arr) {
  let palindromeNumbers = [];
  for (let i = 0; i < arr.length; i++);
  {
    if (isPalindrome(arr[i])) {
      palindromeNumbers.push(arr[i]);
    }
  }
  return palindromeNumbers;
};

console.log(findPalindromeNumbers(sr));


// (6)
// // rotatory

let arr1 = [5, 3, 5, 7, 6, 8, 7]
let k1 = 3;
const rotateArray = function (arr1, k1) {
  for (let i = 0; i < k1; i++) {
    let lastElement = arr1.pop();
    arr1.unshift(lastElement);
  }
  return arr1;
}

console.log(rotateArray(arr1, k1))


// (7)
// print odd numbers in arrow function

let arr = [1,2,3,5,6,7,8,9];

const printOddnumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0)
    {
      console.log(num);
    }
  });
};

console.log(printOddnumbers(arr));


//(8)
// sum of array arrow function

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const sum = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(sum(arr));


