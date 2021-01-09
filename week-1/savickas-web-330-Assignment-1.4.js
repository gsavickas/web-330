/*
============================================
; Title:  Exercise 1.4 - Duck Typing
; Author: Grayton Savickas
; Date:   8 Jan 2021
; Modified By: 
; Description: Simulating classical programming in JavaScript 
;===========================================
*/

const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.4 - Duck Typing")
console.log(headerValue);

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// Car object constructor
function Car(model){
    this.model = model;
};
// start function prototype
Car.prototype.start = function(){
    console.log("Car added to the racetrack")
};
// Truck object constructor
function Truck(model, year){
    this.model = model;
    this.year = year;
};
// start function prototype
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack")
};
// Jeep object constructor
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
};
// start function prototype
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack")
};

// array to push vehicle objects to
let racetrack = [];

// This function pushes vehicle objects to the racetrack array
function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

// creating new vehicle objects
let echo = new Car("Echo");
let chevy = new Truck("Chevy", "1998");
let wrangler = new Jeep("Wrangler", "2020", "Green")

console.log("");

// call the driveIt function to add vehicles to the racetrack
driveIt(echo);
driveIt(chevy);
driveIt(wrangler);

// Print the output
console.log("\n-- The following vehicles have been added to the racetrack --");
for(i=0; i<racetrack.length; i++){
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}

// end program