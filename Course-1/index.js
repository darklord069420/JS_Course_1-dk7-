// variable section => 

let potato = 'cool'  
console.log('potato')

let firstName = 'Potato' 
let lastName = 'Dude'

const InterestRate = '0.69';
console.log(InterestRate); 

let name = 'potatoes'; // String Literal
let age = 16; // Number Literal
let isApproved = false; // Boolean Literal 
let FirstName = undefined; // undefined literal
let coloured = null; // null literal 

const person = {
    name: 'potatoes',
    age: 69
}; 
console.log(person)

// object section => 

// dot notation  => 
 
let person2 = { // this is just a normal variable to showcase how it works
    name: 'cooldude',
    age: 6.9
};
console.log(person2.name)

// dot notation =>
person2.name = 'cooldudeaf'; 

// bracket notation => 
let selection = 'name';
person2[selection] = 'Deez';

// arrays => 

let selectedColours = ['red', 'blue']; 
selectedColours[2] = 'green';
console.log(selectedColours)

// functions => 

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName) 
}

greet('John', 'Smith');
greet('Mary', 'Linecker')

// a arguement is the actual supply of the actual parameter 

// calculating a value 

function square(number) {
    return number * number;
}

let number = square(2)
console.log(number)

// calculating a value without using the let variable 

function square(number) {
    return number * number;
}

console.log(square(69));







