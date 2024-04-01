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



