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

function Cellphone(manufacturer, model, color, price) {

    this.manufacturer = manufacturer;

    this.model = model;

    this.color = color;

    this.price = price;

    this.getPrice = function(){
        return this.price
    };
    
    this.getModel = function(){
        return this.model
    };

    this.getDetails = function() {
    
    return this.getPrice() + " Dollar " + this.manufacturer + " " +  this.getModel() + " in " + this.color;
    
    };
    
    }

    var iphone = new Cellphone("Apple", "iPhone Pro", "Red", 1200)
    
    console.log(iphone.getDetails())

    // end program