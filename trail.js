
//constructor function for traveler

function Traveler(name,food,isHealthy) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
//let travelerJoe = new Traveler("joe")

//constructor function for hunter

//function Hunter(name) {
//   Traveler.call(this, name);
//  this.food = 200;
//}
//order is important here

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 200;
    }
}
Hunter.prototype = Object.create(Traveler.prototype);
Hunter.prototype.constructor = Hunter;



Hunter.prototype.hunt = function () {
    if (Math.random() > 0.5) {
        this.food += 100;
        console.log("hunt sucess");
    } else {
        this.food = this.food - 2;
        console.log("hunt fail");
    }
}

Hunter.prototype.steal = function (traveler) {
    traveler.food = traveler.food - 10;
    this.food = this.food + 10;
    console.log(this.name + "stole food from" + this.food)
}


function Wagon(capacityNumber, passangers) {
    this.capacity = capacityNumber;
    this.capacityNumber = 4;
}

Traveler.prototype.hunt = function () {
    this.hunt = travelerHunt;
    this.hunt = TotalFood + 2;
    return this.TotalFood =

        Traveler.prototype.eat = function () {
            this.eat >= 1;
        }
    Wagon.prototype.getAvailableSeatCount = function () {
        this.getAvailableSeatCount = capacity;
        return this.capacity = 0;

    }
    Wagon.prototype.join = function (traveler) {
        this.join = emptySeats;
        return this.emptySeats = 0;
    }
    Wagon.prototype.shouldQuarantine = function () {
        for (let i = 0; i < this.passengers; i++) {
            this.passangers[i];
        }

    }
    Wagon.prototype.totalFood = function () {
        for (let i = 1; i < this.totalFood; i--) {
            return this.totalFood[i];
        }
    }
    console.log(isHealthy())
    console.log(wagon.shouldQuarantine())
    console.log(wagon.totalFood());




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



}