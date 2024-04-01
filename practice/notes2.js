class UberPriceCalculator {
  constructor(basePrice, costPerKiloMeter, surgePrice) {
    this.basePrice = basePrice;
    this.costPerKiloMeter = costPerKiloMeter; 
    this.surgePrice = surgePrice; 
  }

  calculateTotalPrice(distance) {
    const totalPrice =
      this.basePrice + this.costPerKiloMeter * distance * this.surgePrice;
    return totalPrice;
  }
}


const uberCalculator = new UberPriceCalculator(2, 1.4, 4);
const totalPrice = uberCalculator.calculateTotalPrice(10);
console.log(totalPrice); 




// let num = 10;
// let num1 = 22;
// let num2 = 33;
// sum = num + num1 + num2;
// console.log(`num + num2 + num1 = sum`);
// console.log(`${num} + ${num1} + ${num2} = ${sum}`);
