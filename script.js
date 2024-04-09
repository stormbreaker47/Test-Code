class UberPriceCalculator {
  constructor(basePrice, costPerKiloMeter, surgePrice) {
    this.basePrice = basePrice;
    this.costPerKiloMeter = costPerKiloMeter; // Assigning the parameter value to the class property
    this.surgePrice = surgePrice; // Assigning the parameter value to the class property
  }

  calculateTotalPrice(distance) {
    const totalPrice =
      this.basePrice + this.costPerKiloMeter * distance * this.surgePrice;
    return totalPrice;
  }
}

// Creating an instance of UberPriceCalculator
const uberCalculator = new UberPriceCalculator(2, 1.4, 4);

// Calculating total price for a distance of 10 kilometers
const totalPrice = uberCalculator.calculateTotalPrice(10);
console.log(totalPrice); // Output will be: 58



let arr = [2, 3, 5, 7, 8, 9, 3, 5, 6, 7];
function add(value1, value2) {
  return value1 + value2;
}
const result = arr.reduce(add);
console.log(result);

let arr1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 10]
const s1 = arr1.reduce((accum, value)=>{
  if (accum < value) {
    return "value";
  } else {
    return "accum";

  }
});

console.log(s1);


