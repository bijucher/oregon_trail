("hello")
//constructor function for traveler

function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
function Wagon(capacity) {
    this.capacity = capacity;
    this.passengerList = [];
}

Traveler.prototype.hunt = function () {
    this.food = this.food + 2;
}

// Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the traveler is no longer healthy.
Traveler.prototype.eat = function () {
    if (this.food === 0) {
        this.isHealthy = false;
    } else {
        this.food = this.food - 1;
    }
}

Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengerList.length;
}
//Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
Wagon.prototype.join = function (Traveler) {
    if (this.capacity > this.passengerList.length) {
        this.passengerList.push(Traveler);
    }
    else {

    }
}
//Return true if there is at least one unhealthy person in the wagon. Return false if not.
Wagon.prototype.shouldQuarantine = function () {
    if (this.passengerList < this.capacity) {
        (this.passengerList[i].isHealthy !== true)
        this.passengerList.push(Traveler);
    }
    return true
}
Wagon.prototype.totalFood = function () {
    if (this.eat < this.totalFood)
        return (this.totalFood)
}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
