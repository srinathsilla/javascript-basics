console.log("Hello World!");

// variables
// let
// var

let firstName = 'srinath';

console.log(firstName);

// constant - cannot change the value
const name = 'srinath';

// datatype
let age = 28;

let isSrinathCool = true;

let largeNum = BigInt(756082374650184376508371456018375460137650138765401873465401837456);

let lastName;

console.log(lastName);

let myName = "Srinath";
myName = null;
console.log(myName);

console.log(typeof firstName);
console.log(typeof age);

age = 'Adult';

console.log(typeof age)

// Arithemetic operator

let result = 10 + 5;
console.log(result);

result = 10 - 5;
console.log(result);

result = 10 * 5;
console.log(result);

result = 10 / 5;
console.log(result);

result = 10 % 4;
console.log(result);

let count = 0;
count++;
console.log(count);

let x = 5;
x--;
console.log(x);

// comparison operators
console.log(5 == '5');

console.log(5 === '5');

console.log(5 != '6');

console.log(5 !== '5');

// && , ||, !
let playerA = false;
let playerB = true;

console.log(playerA && playerB);

console.log(playerA || playerB);

console.log(!playerA);

// null coleascing operator
firstName = null;
console.log(firstName ?? "no name provided");

// conditional statements
let isRaining = true;
if (isRaining){
    console.log("Don't go outside");
} else {
    console.log("Go outside");
}

let weather = 'partly-cloudy'
switch(weather){
    case 'sunny':
        console.log("Sunny");
        break;
    case 'partly-cloudy':
        console.log('partly cloudy');
        break;
    case 'raining':
        console.log('raining');
        break;
    default:
        console.log('Weather unknown');
        break;
}

//ternary operator
age = 20;
console.log(age > 16 ? 'can drive' : 'cannot drive')

// Block Scope
if (true){
    let message = 'Hi there';
    console.log(message);
}
// console.log(message);

if (true) {
    let myNumber = 100;
    if(true){
        let myNumber = 200;
        // console.log(myNumber);
    }
    console.log(myNumber);
}

// Loops
let counter = 1;
while(counter <= 5){
    console.log(counter);
    counter++;
}

for (let i=0; i<5; i++){
    console.log(i);
}

let k = 0;
do {
    console.log(k);
    k++;
}while(k<=5);

// Arrays

const animals = ["pig", "cow", "horse", "dog"];

animals.push("cat")
console.log(animals);

animals.pop();
console.log(animals);

console.log(animals[2]);

let years = [1999, 2000, 2001, 2003];
let bool = [true, false, false, true];

let mixed = ["srinath", 25, true, null];

for (let i = 0; i < animals.length; i++){
    let animal = animals[i];
    console.log(animal);
}

// functions

function greet(name){
    return `Hello ${name}!`;
}


// const greet = function(name) {
//     return `Hello ${name}!`;
// }
console.log(greet("Srinath"))

const shortGreet = (name) => `Hello ${name}!`;
console.log(shortGreet("Srinath"))

//hoisting

// var is function scope. declaration gets hoisted on top of the function scope but not the intialization
// let and const are block scope. declaration and intialization doesn't get hoisted
// function declaration and definations are also hoisted, that means we can call a function before its defination

console.log(varVariable);
var varVariable = true;

function welcome(){
    if(true){
        var msg = "welcome";
    }

    console.log(msg);
}

welcome();

//objects

let sister = {
    name: "Jenny",
    age: 28
}

let brother = {
    name: "Josh",
    age: 34
}

let person = {
    firstName: "Srinath",
    lastName: "Silla",
    age: 25,
    email: "sillasrinath@gmail.com",
    greet: function(){
        console.log(`Hello ${this.firstName}`);
    },
    siblings: [sister, brother] 
}

person.greet();

console.log(person.siblings[1].name);

//callback functions
function doHomework(subject, callback){
    console.log(`Starting my ${subject} homework`);
    callback();
}

doHomework("math", function(){
    console.log("Finished my homework");
})

function processEvenNumber(number){
    let processedNumber = number * -10;
    console.log(processedNumber);
}

function processOddNumber(number){
    let processedNumber = number + 32;
    console.log(processedNumber);
}


function processNumber(number){
    if(number%2 == 0){
        // process even number
        return function (){
            console.log(`Processing even number.... ${number}`);
        }
    }else {
        //process odd number
        return function() {
            processOddNumber(number);
        }
    }
}

// processNumber(5, processEvenNumber, processOddNumber);
processNumber(5)();


function processPeople(callback){
    const people = ["John", "Jane", "Alice"];
    for (let i=0; i<people.length; i++){
        const person = people[i];
        callback(person);
    }
}

processPeople((person) =>
    console.log(`Hello ${person}!`)
)

console.table(['apples', 'oranges', 'bananas']);

console.group('Task 1');
console.log('Task activity 1');
console.log('Task activity 1');
console.groupEnd();

console.table({ "a": 1, "b": 2, "c": 3 });


// user input

let config = {
    input: process.stdin,
    output: process.stdout
}

const readline = require('readline').createInterface(config);

// readline.question("Enter you name: ", function(userInput){
//     console.log(userInput);
//     readline.close();
// });

let fruits = []

function promptUser(){
    readline.question("Enter in a fruit: ", function (userInput) {
        if (userInput === 'stop'){
            console.log(fruits);
            readline.close();
        } else{
            fruits.push(userInput);
            promptUser();
        }
        
    })
}

// promptUser();

// Symbol data type

const joe1 = Symbol("Joe");
const joe2 = Symbol("Joe");

const friends = {
    [joe1]: {age: 28, firstName: "Joe", lastName: "Tom"},
    [joe2]: { age: 28, firstName: "Joe", lastName: "John" },
    Alice: { age: 28, firstName: "Alice", lastName: "Jill" },
    Bobby: { age: 28, firstName: "Bobby", lastName: "Cake" },
}

console.log(friends);


// Primitive vs Reference datatype

// Primitive Datatype
// number, string, boolean, undefined, null, BigInt

// Refernce Datatype
// Arrays, Functions, objects

let a = 10;
let b = a;

a = 20;
console.log(a);
console.log(b);


let student = {
    name: "John",
    age: 21
}

let student2 = student
student.age = 40

console.log(student2);

// Map

let myMap = new Map();

const joe1Key = {
    firstName: "Joe",
    lastName: "Jacob"
}

const joe2Key = {
    firstName: "Joe",
    lastName: "Johnson"
}

myMap.set(joe1Key, 41345343413241);
myMap.set(joe2Key, 767345187345);
myMap.set("Alice", 8987698726548);
myMap.set("Jack", 87658273423);

console.log(myMap);
console.log(myMap.get("Jack"));
console.log(myMap.has("Tommy"));
console.log(myMap.size);

// loops
let employee = {
    firstName: "Srinath",
    lastName: "Silla",
    hairColor: "black",
    age: 25
}

for (const key in employee){
    console.log(key);
}

fruits = ['apple', 'mango', 'banana', 'cherry']

for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach( function(fruit, index){
    console.log(fruit);
});

// try.. catch..
try{
    console.log(nonExistantVariable);
}catch(error){
    console.log("uh oh something happened");
}

// String manipulation


firstName = "Srinath"


const sentence = "Hello " + firstName;
const template = `Hello ${firstName}`;

console.log(template);

let quote = "The large brown fox, jumped over the fence";

const split = quote.split(",");
const trim = quote.trim(); // removes beginning and ending white spaces
const includes = quote.includes("fox");
const includes2 = quote.includes("cat");
const replace = quote.replace("fox","cat");

let myFriend = new Map();

const friend = "joe 28 123-456-7890"

const myFriendInArray = friend.split(' ');

myFriend.set(myFriendInArray[0], myFriendInArray.splice(1,2));

console.log(myFriend.get(myFriendInArray[0]));


// Classes in Javascript

class Person {

    // not required if mentioned in the constructor
    // firstName;
    // lastName;
    // age;

    constructor(firstName, lastName, age, hairColor){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
        this.hairColor = hairColor  // automatically creates instance variable for the class
    }

    sayName(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let srinath = new Person("Srinath", "Silla", 25, "Black");

srinath.sayName();


// Inheritance

class Animal {
    constructor(name, numberOfLegs){
        this.name = name,
        this.numberOfLegs = numberOfLegs
    }

    eat(food){
        console.log(this.name + " eats the " + food);
    }

    speak(){
        console.log(this.name + " makes a noise");
    }
}

class Mammal extends Animal{
    hasFur = true;
    isWarmblooded = true;

    constructor(name, numberOfLegs){
        super(name, numberOfLegs);
    }
}

class Dog extends Mammal {
    constructor(name, breed){
        super(name, 4);
        this.breed = breed;
    }

    speak(){
        console.log("Woof!");
    }
}

class Cat extends Mammal {
    constructor(name, breed) {
        super(name, 4);
        this.breed = breed;
    }

    speak() {
        console.log("Meow!");
    }
}

let cat = new Cat("Theo","Siamese");
cat.speak();
cat.eat("cat food");

let dog = new Dog("Milo", "German Sheperd");
dog.eat("dog food");
dog.speak();

console.log(dog.__proto__.__proto__);

console.log(Object.getPrototypeOf(dog));

// object manipulation

const john = {
    firstName: "John",
    lastName: "Doe",
    age: 28
}

// adding object property after object creation
john.hairColor = "Grey";

// delete object prooperty
delete john.age;

console.log(john);

const johnClone = { ...john };

console.log(johnClone);



