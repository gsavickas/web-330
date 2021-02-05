/*
============================================
; Title:  Exercise 5.1 - Namespacing
; Author: Grayton Savickas
; Date:   17 Jan 2021
; Modified By:
; Description: Namespacing
;===========================================
*/
const header = require('../week-1/Savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "Exercise 5.1 - Namespacing")
console.log(headerValue);

// Example of object literal notation
x = 0;

// First initialization of appExample
var appExample = {
  getStat:function(){
    if (x == 0){
      console.log("Logic works too")
    }
    else return console.log("It works")
  },
  models: { toyota: "Echo"},
  views: {
    pages:{oldBook: "Poems"}
  },
  collections:{ lightSabers: "Look at my collection!"}
  };

  console.log(appExample.getStat());
console.log(appExample.models);

// This example uses the same variable name as before but checks to see if appExample exists.
// If it does it then uses the one that is already initialized.
  var appExample = appExample || {
      getStat:function(){
        if (x == 1){
          console.log("Logic works too")
        }
        else console.log("It works")
      },
      models: { toyota: "Echo"},
      views: {
        pages:{oldBook: "Poems"}
      },
      collections:{ lightSabers: "Look at my collection!"}
      };


console.log(appExample.getStat());
console.log(appExample.models);
