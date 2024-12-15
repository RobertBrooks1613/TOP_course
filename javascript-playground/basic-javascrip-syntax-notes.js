// Variables
let x = 5;          // Python: x = 5
const y = 10;       // Python: y = 10 (no built-in constant, use uppercase by convention)

// Data Types
let num = 42;       // Python: num = 42
let float = 3.14;   // Python: float = 3.14
let str = "Hello";  // Python: str = "Hello"
let bool = true;    // Python: bool = True
let arr = [1, 2, 3];// Python: arr = [1, 2, 3]
let obj = {key: "value"}; // Python: dict = {"key": "value"}

// Input (Browser - using prompt)
let name = prompt("Enter your name:");
console.log("Hello, " + name);
// Python: 
// name = input("Enter your name: ")
// print("Hello, " + name)

// Input (Node.js - using readline)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your age: ', (age) => {
  console.log(`You are ${age} years old`);
  readline.close();
});
// Python:
// age = input("Enter your age: ")
// print(f"You are {age} years old")

// Arithmetic Operations
let sum = 5 + 3;    // Python: sum = 5 + 3
let diff = 10 - 4;  // Python: diff = 10 - 4
let prod = 2 * 6;   // Python: prod = 2 * 6
let quot = 15 / 3;  // Python: quot = 15 / 3
let mod = 17 % 5;   // Python: mod = 17 % 5
let exp = 2 ** 3;   // Python: exp = 2 ** 3

// String Operations
let greeting = "Hello" + " World"; // Python: greeting = "Hello" + " World"
let repeatedStr = "Ha".repeat(3);  // Python: repeated_str = "Ha" * 3

// Conditional Statements
if (x > 0) {
    console.log("Positive");
} else if (x < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
// Python:
// if x > 0:
//     print("Positive")
// elif x < 0:
//     print("Negative")
// else:
//     print("Zero")

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Python:
// for i in range(5):
//     print(i)

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Python:
// i = 0
// while i < 5:
//     print(i)
//     i += 1

// Functions
function greet(name) {
    return "Hello, " + name;
}
// Python:
// def greet(name):
//     return "Hello, " + name

// Arrow Function (ES6+)
const greetArrow = (name) => "Hello, " + name;
// Python: No direct equivalent, lambda is similar but more limited

// Arrays (Lists in Python)
let fruits = ["apple", "banana", "orange"];
fruits.push("grape");     // Python: fruits.append("grape")
fruits.pop();             // Python: fruits.pop()
let length = fruits.length; // Python: length = len(fruits)

// Objects (Dictionaries in Python)
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person.name); // Python: print(person["name"])

// Try-Catch (Exception Handling)
try {
    // code that might throw an error
} catch (error) {
    console.error(error);
}

// example
function capitalize(str) {
    try {
        if (typeof str !== 'string' || str.length === 0) {
            throw new TypeError('Input must be a string and not empty')
        }
        return str.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    } catch (error) {
        console.error("an error has been thrown. ", error.message);
    }
}
// Python:
// try:
//     # code that might raise an exception
// except Exception as error:
//     print(error)

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + " makes a sound.");
    }
}
// Python:
// class Animal:
//     def __init__(self, name):
//         self.name = name
    
//     def speak(self):
//         print(f"{self.name} makes a sound.")

// Importing modules
// import { function } from 'module';  // Python: from module import function
// import * as module from 'module';   // Python: import module

// Async/Await (for asynchronous operations)
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetching data failed', error);
    }
}
// Python (using aiohttp):
// import aiohttp
// import asyncio
// 
// async def fetch_data():
//     try:
//         async with aiohttp.ClientSession() as session:
//             async with session.get('https://api.example.com/data') as response:
//                 data = await response.json()
//                 print(data)
//     except Exception as error:
//         print('Fetching data failed', error)
// 
// asyncio.run(fetch_data())