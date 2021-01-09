/*
============================================
; Title:  Exercise 1.3 - Class Refresher
; Author: Grayton Savickas
; Date:   8 Jan 2021
; Modified By: 
; Description: Simulating classical programming in JavaScript 
;===========================================
*/
const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.3 - Class Refresher")
console.log(headerValue);

// start program

// This function produces a class for Cellphone with getters and other properties
function Cellphone(manufacturer, model, color, price) {

    // Properties
    this.manufacturer = manufacturer;

    this.model = model;

    this.color = color;

    this.price = price;

    // Gets price
    this.getPrice = function(){
        return this.price
    };
    
    // Gets model
    this.getModel = function(){
        return this.model
    };

    // Uses getters and other properties to output the details of the Cellphone function 
    this.getDetails = function() {
    
    return this.getPrice() + " Dollar " + this.manufacturer + " " +  this.getModel() + " in " + this.color;
    
    };
    
    }

    // Creates a new Cellphone function class with new properties
    var iphone = new Cellphone("Apple", "iPhone Pro", "Red", 1200)
    
    // Outputs new class details with get details getter
    console.log(iphone.getDetails())

    // end program