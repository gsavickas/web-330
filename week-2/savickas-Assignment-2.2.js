/*
============================================
; Title:  Exercise 1.3 - Class Refresher
; Author: Grayton Savickas
; Date:   15 Jan 2021
; Modified By: 
; Description: Simulating classical programming in JavaScript 
;===========================================
*/
const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 1.3 - Class Refresher")
console.log(headerValue);
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

let person = {
    getAge: function (){
        return this.age;
    }
}

let Grayton = Object.create(person, {
    "age": {
        "value": "27"
    },
    "full-name":{
        "value": "Grayton Savickas"
    }
});

Grayton.getAge();

console.log("The person's full name is '%s'", Grayton.full-name);
console.log("The person's age is '%s'", Grayton.age);




// end program

