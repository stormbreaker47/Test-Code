


// 1

class Movie {
  constructor(title = "goat", studio = "7star", rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);



// 3. Write a “person” class to hold all the details.

class person {
  constructor(firstName, secondName, age, address, gender, workType) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.address = address;
    this.gender = gender;
    this.workType = workType;
  }
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
  getDetails() {
    return `Name : ${this.getFullName()}, age: ${this.age}, address: ${
      this.address
    }, gender: ${this.gender}, woerkType: ${this.workType}`;
  }
}

const personDetails1 = new person(
  "john",
  "david",
  "26",
  "iob colony 4th main road",
  "Male",
  "developer"
);
console.log(personDetails1.getDetails());





// 4. write a class to calculate the Uber price.


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

