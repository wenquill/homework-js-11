class Vehicle {
    constructor (dimensions, brand, model, manufactureDate) {
        this.dimensions = dimensions;
        this.brand = brand;
        this.model = model;
        this.manufactureDate = new Date(manufactureDate);
    }

    getFullInfo() {
        return `brand: ${this.brand}; model: ${this.model}; age: ${this.getAge}`;
    }

    get getAge () {
        return new Date().getFullYear() - this.manufactureDate.getFullYear();
    }
}

class PassengerTransport extends Vehicle {
    constructor (dimensions, brand, model, manufactureDate, passengerLimit, passengerCount) {
        super(dimensions, brand, model, manufactureDate);
        this.passengerLimit = passengerLimit;
        this.passengerCount = passengerCount;
    }

    addPassenger() {
        if (this.passengerLimit > this.passengerCount) {
            this.passengerCount++;
            return true;
        } else {
            return false;
        }
    }

    getFullInfo() {
        return `brand: ${this.brand}; model: ${this.model}; age: ${this.getAge}; passenger limit: ${this.passengerLimit}`;
    }
}

class FreightTransport extends Vehicle {
    constructor (dimensions, brand, model, manufactureDate, capacity) {
        super(dimensions, brand, model, manufactureDate);
        this.capacity = capacity;
    }

    checkLoadingPossibility(weight) {
        return weight <= this.capacity;
    }

    getFullInfo() {
        return `brand: ${this.brand}; model: ${this.model}; age: ${this.getAge}; capacity: ${this.capacity}`;
    }
}

const carDimensions = { length: 6, width: 2.5, height: 2 };
const myCar = new Vehicle(carDimensions, 'Toyota', 'Camry', '2019-05-15');

console.log(myCar.getFullInfo()); 
console.log(myCar.getAge); 

const busDimensions = { length: 12, width: 2.5, height: 3.5 };
const myBus = new PassengerTransport(busDimensions, 'Mercedes', 'Sprinter', '2020-02-10', 30, 28);

console.log(myBus.getFullInfo());
console.log(myBus.addPassenger());
console.log(myBus.addPassenger()); 
console.log(myBus.passengerCount); 
console.log(myBus.addPassenger()); 

const lorryDimensions = { length: 13.6, width: 2.5, height: 2.7 };
const myLorry = new FreightTransport(lorryDimensions, 'Volvo', 'Cross Country', '2017-04-28', 25000);

console.log(myLorry.getAge);
console.log(myLorry.getFullInfo()); 
console.log(myLorry.checkLoadingPossibility(24000)); 
console.log(myLorry.checkLoadingPossibility(26000)); 