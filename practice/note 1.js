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
car4.fuel = -10;
console.log(car4.fuel);
