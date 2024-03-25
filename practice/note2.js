
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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




let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(sum(arr));

