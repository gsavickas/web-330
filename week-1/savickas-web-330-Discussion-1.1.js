/*
============================================
; Title:  Exercise 1.1 - Class Refresher
; Author: Grayton Savickas
; Date:   7 Jan 2021
; Modified By: 
; Description: Simulating classical programming in JavaScript 
;===========================================
*/
const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.3 - Class Refresher")
console.log(headerValue);

// Start of Program

function Tree(type, color, height){
    this.type = "spruce";
    this.color = "green";
    this.height = "2";
}

// End of program