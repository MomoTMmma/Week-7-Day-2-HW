//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function person3(i){
    for (food in person3){
        if (food == food){
            console.log(`My favorite food is ${food}`)
        }else{
            console.log("No that's not my favorite food")
        }
    }
}
console.log(person3(pizza))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Hi my name is ${this.name} I am ${age}`)
    };
}
console.log(person('Melissa', 23))



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkString = (i) => {
    if (i <= 10){
        console.log("Big word");
    }else{
        console.log("Small Number");
    }
}
console.log(checkString('string'))



// ========= Codewars Questions ============

// ====== Question 1 ========
// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i){
    return i * 2
}
console.log(doubleInteger(6))



// ====== Question 2 ========
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
// If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
// The limit will always be higher than the base.For example, if the parameters passed are (2, 6), 
// the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.




function findMultiples(integer, limit) {
    let list = [];
    
    for (let i = integer; i <= limit; i += integer){
      list.push(i);
    }
    return list;
  }
console.log(findMultiples(2, 6))