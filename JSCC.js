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
/*
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
console.log(fruits.indexOf('Mangos'))//gives you number in array
*/
//Object literals
//key value pairs
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
*/
/*
//console.log(person) //will show us the values.
//console.log(person.firstName) //will show us first name
//you can log more than one thing.
//console.log(person.firstName, person.lastName); //will print first and last name
//console.log(person.hobbies[1])//if you want the second value in movies
//if we wanted just the city
//console.log(person.address.city)//will print Boston
//const { firstName, lastName } = person
//think of the above as not assigning but pulling from.
//console.log(firstName)
//if it's an imbeded object like address
const { firstName, lastName, address: { city }} = person

console.log(city)
//destructuring is kind of advanced. 
//you can also add to person
person.email = 'john@gmail.com'
console.log(person)//email now prints
*/


//arrays of objects
/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];
*/
/*
console.log(todos)//prints out all of above
console.log(todos[1])//prints out Meeting with boss
//json format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);//prints in JSON format
*/

//for(let i = 0; i <= 10; i++) {
//    console.log(i)
//}
//add a template string
/*
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

//while Loops
let i = 0; //set the variable outside of the loop
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++
}
*/
/*
//using the above array of the todos
for(let i = 0; i <= todos.length; i++) {
    console.log(todos[i]);
    console.log(todos[i].text);
}
*/
//above is not best practice for loops. Use for-of
/*
for(let todo of todos) {
    //console.log(todo.)//prints complete array
    console.log(todo.text)//prints just the text todos list
    console.log(todo.id)// prints just the id's
}
*/
//high order array methods
//forEach, map, filter
/*
todos.forEach(function(todo) {//todo is variable i want to use
    console.log(todo.text)//prints out text of todos can be .id, etc.
});
*/
/*
const todoText = todos.map(function(todo) {
    return todo.text;
    
});
console.log(todoText)//prints out todo list in array
*/
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;

});
console.log(todoCompleted)
*/
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;

}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted); //prints out todo completed text
*/

//conditionals
//start with basic if statements
/*
const x = 15;//play with the number.  using a string prints out x is less than 10???

if(x === 10) {//double == does not match data types if 10 was string '10' it would still be true
    console.log('x is 10');
}

//if(x === 10) {//triple === has to match data type. this is false while above is true
  //  console.log('x is 10');
//} else {
  //  console.log("x is NOT 10")
//} 
else if(x > 10) {
    console.log("x is greater than 10")
} else {
    console.log("x is less than 10")
}
*/
/*
const x = 6;
const y = 11;

if(x > 5 || y > 10) {//double pipes means 'or'
    console.log('x is more than 5 or y is more than 10')
}
*/
/*
const x = 6;
const y = 7;

//if(x > 5 && y > 10) {//double '&&' means 'and'
    //console.log('x is more than 5 or y is more than 10')
//} else {
  //  console.log("nope")
//}
//the above can also be done with double if statement but not as clean
if(x > 5) {
    if(y > 10) {
        console.log("Yes")
    } else {
    console.log("No")
}
}//not the preferred method
*/
/*
//turnary operator
const x = 5;

const color = x > 10 ? 'red' : 'blue'; // '?' is then ':' is else
// basically checks to see if true or not true 
console.log(color)
*/
/*
//switches... another way to evaluate a condition
const x = 10;

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red'://set cases 
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log("color is NOT red or blue");
    break;
}
*/
//functions
//function addNums(num1 = 1, num2 = 1) { //inside parentheses we put parameters
//    console.log(num1 + num2)// at this point happens since we haven't called the function
//}

//addNums()//without assigning values we gat NaN (not a number)
//addNums(5,4)//would console log 9
//we can also assign default values to our function by num1 = 1, num2 = 1

function addNums(num1 = 1, num2 = 1) { //inside parentheses we put parameters
    console.log(num1 + num2)// at this point happens since we haven't called the function
}

//addNums()//this logs 2 as our default values
//addNums(9,9)//this logs 18 as it takes in provided values

//for the most part you are not going to console.log a function
//you are going to return something from it.

function addNums(num1 = 1, num2 = 1) { //
    return num1 + num2;//this will not log anything unless we call it see below
}

console.log(addNums(5,5))