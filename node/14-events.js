// we are going to make a custom emitter class needed if you want to custom extend from classes other than the main class or any custom feature you would like to be added.
//this class

const EventEmitter = require('events')

const customEMitter = new EventEmitter

//The on and emit methods are to keep track of the order. You can also use additional arguement/parameters

//In JS a class is like a blueprint for creating objects. It defines the properties(data) and the methods(functions) that the objects creaated from it will have

// class Car{
//     constructor(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
//     }
    
//     //methods
//     startEngine(){
//         console.log(`${this.make} ${this.model} engine started`)
//     }
    
//     drive(){
//         console.log(`${this.make} ${this.model} is in Drive`)
//     }

//     reverse(){
//         console.log(`${this.make} ${this.model} is in reverse`)
//     }

//     neutral(){
//         console.log(`${this.make} ${this.model} is in neutral`)
//     }
// }

// const montys_car = new Car("Jeep", "Renegade", 2016)
// const ryder_car = new Car("Ford", "Bronco", 1996)

// montys_car.startEngine()
// montys_car.drive()

// ryder_car.startEngine()
// ryder_car.drive()

// Class = Blueprint or template
// Instance =


class temperature extends EventEmitter{
    constructor(){
        // A super class is a parent class that other classes can extend from(inherit
        //from). It defines the properties and ethods can be reused by child classes(call subclasses).
        super()
        this.temperature = 95
    }
}