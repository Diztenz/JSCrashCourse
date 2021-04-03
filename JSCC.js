// const numbers = new Array(1,2,3,4,5); //constructor 
// console.log(numbers) // prints (5) [1, 2, 3, 4, 5]

//const fruits = ["Apples", "Pears", "Oranges", "Bananas", "Grapes"]

//console.log(fruits)

// to comment out one line

/* to comment out
multiple 
lines */
/*
Variables & Data Types
Arrays
Object Literals
Methods for strings, arrays, objects, etc
Loops - for, while, for...of, forEach, map
Conditionals (if, ternary & switch)
Functions (normal & arrow)
OOP (prototypes & classes)
DOM Selection
Dom manipulation
Events
Basic Form Validation

You want to put your JS (JaveScript) <script> </script> at the end right before the ending </body> because you want your HTML and CSS to load first.

You can run JS directly in your code or you can place it in a different file (recommended).

Add <script src=”javasciptfilename.js”></script> to run your JS file.

alert() creates a pop up window.  - alert(“hello world”) creates pop up window with hello world in it.
Don’t really want to use alert since it slows things down.
Better to use console.log()
	console.error()
	console.warn()

Variables and how to set them:
	var, let, const

var can cause problems if there's another var with the same name outside the context you are using it in.

let you can reasing values
let age = 30; //console.log(age) //will give me 30

age = 31;

console.log(age) //will give me 31

if i use const in place of let I'll get an error.

When do we use 'let' when do we use 'const'

Always use const unless you know you are going to reasing the value.

score in a game will not be const.

data types

what kind of data can we assign to variables.
strings, numbers, boolean, null, undefined, symbol

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z) //use console.log (typeof 'name of variable') to find out what it is.

const name = "John"; //string
const age = 30; //number
const rating = 4.5; //number
const isCool = true; boolean
const x = null; //null
const y = undefined; //undefined
let z; //undefined

strings

Concatenation

console.log("My name is name and I am age.") //would just print My name is name and I am age.

old way of concatenation
using + sign to concatenate the variable.

console.log("My name is " + name + " and I am " + age + ".")
new way of concatenation
Template String using back ticks and wherever variable us ${} for variable
console.log(`My name is ${name} and I am ${age}.`)

You can make this into a const
const hello = `My name is ${name} and I am ${age}.` //without parentheses

console.log(hello) //will print My name is John and I am 30.

const s = 'Hello World';

console.log(s. length); // prints out 11
console.log(s. toUpperCase()); //prints HELLO WORLD
console.log(s. toLowerCase()); // hello world

Anything ending in paranthesis () is a method, method is a function that is associated with an object.

console.log(s. substring(0, 5)); // prints Hello
you can also tack on other methods as well.

console.log(s. substring(0, 5).toUpperCase());// prints HELLO

split a string into an array

console.log(s.split('')); // prints ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

const s = 'technology, computers, IT, code';

console.log(s.split(', ')); // use ', ' , then space since there's a space in front

prints out
(4) ["technology", "computers", "IT", "code"]
0: "technology"
1: "computers"
2: "IT"
3: "code"
length: 4


Arrays - variables that hold multiple values

constructor using the value = new Array
const numbers = new Array(1,2,3,4,5);
console.log(numbers) // prints (5) [1, 2, 3, 4, 5]

*/

const fruits = ["Apples", "Pears", "Oranges", "Bananas", "Grapes"]

console.log(fruits) //prints const fruits = ["Apples", "Pears", "Oranges", "Bananas", "Grapes"]

//In JS you can have different data types in an array.

//numbers booleans string
console.log(fruits[3]) //prints out the 4th element in the array Bananas
// to add to the array we could
fruits[5] = "Mangos"
console.log(fruits)
//to add value without knowing how many items in array.
//use .push
fruits.push("Guava")
console.log(fruits)
//to add a value to the beginning
//use .unshift
fruits.unshift("Kiwi")
console.log(fruits)

fruits.pop(); //removes the last one of the array.
console.log(fruits)

//if you want to see if something is an array use
console.log(Array.isArray(fruits)) //gives us true.
console.log(fruits.indexOf('Mangos'))