# 5 Built-In functions

### alert

This function is to show a popup alert in a browser

```js
alert("Hello!");
```

### prompt

Browser's function to shows a text box and gets user input

```js
let name = prompt("How old are you?");
```

### confirm

Browser's function to popup Yes/No

```js
let ok = confirm("Are you sure?");
```

### typeof

It's a function to check what type of data it the variable

```js
const age = 19;
console.log(typeof age);
```

### isNaN

It's a function to check whether the a variable is NaN (Not-A-Number) data type;

```js
isNaN(20);
```

# 20 Built-In Methods

### .push()

Add a new element into end of an array

```js
const numbers = [1, 2];
numbers.push(20);
console.log(numbers); //Output : [1, 2, 20]
```

### .pop()

Destroy the last element of an array

```js
const numbers = [1, 2, 20];
numbers.pop();
console.log(numbers); //Output : [1, 2]
```

### .shift()

Destroy the first element of an array

```js
const numbers = [1, 2, 20];
numbers.shift();
console.log(numbers); //Output : [2, 20]
```

### .unshift()

Add a new element into beginning of an array

```js
const numbers = [1, 2];
numbers.unshift(20);
console.log(numbers); //Output : [20, 1, 2]
```

### .map()

Change each element into a new value

```js
const numbers = [1, 2, 20];
const timesTwo = numbers.map((x) => x * 2);
console.log(timesTwo); //Output : [2, 4, 40]
```

### .filter()

Filter array element based a specific condition

```js
const numbers = [1, 2, 20];
const aboveTeenAger = numbers.filter((num) => num > 10);
console.log(aboveTeenAger); //Output : [20]
```

### .reduce()

Reduce the array into one element

```js
const numbers = [1, 2];
const initialValue = 0;
const sumWithInitialValue = numbers.reduce((sum, item) => sum + item, 0);
console.log(sumWithInitialValue); //Output : 3
```

### .forEach()

Run a function to each element without making a new array

```js
const numbers = [1, 2, 3];
numbers.forEach((number) => console.log(`${number}`));
//Output :
// 1
// 2
// 3
```

### .toUpperCase()

Capitalize each string

```js
const text = "javascript";
console.log(text.toUpperCase()); //Output : JAVASCRIPT
```

### .toLowerCase()

Make each string small

```js
const text = "JavaScript";
console.log(text.toLowerCase()); //Output : javascript
```

### .includes()

Check if string contains a character

```js
let sentence = "Learn how to code is fun!";
console.log(sentence.includes("code")); // Output: true
```

### .replace()

Replace part of string with a new string

```js
let message = "Hello World";
let newMessage = message.replace("World", "JS");
console.log(newMessage); // Output: "Hello JS"
```

### .split()

Splits a string into an array based on a specified separator

```js
let hobbies = "Reading,Writing,Coding";
console.log(hobbies.split(",")); // Output: ["Reading", "Writing", "Coding"]
```

### .trim()

Remove whitespace at beginning and end of a string

```js
let username = "   admin   ";
console.log(username.trim()); // Output: "admin"
```

### Math.random()()

Generates a random decimal number between 0 and close to 1

```js
console.log(Math.random()); // Contoh Output: 0.45612398...
```

### Math.floor()

Rounds a decimal number down

```js
console.log(Math.floor(4.9)); // Output: 4
```

### Math.ceil()

Rounds a decimal number up

```js
console.log(Math.ceil(4.1)); // Output: 5
```

### Math.round()

Round a number to nearest integer

```js
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
```

### console.log()

Print out to developer console tab

```js
console.log("System is running"); // Output: System is running
```

### Object.keys()

Retrieve all property (keys) from an object

```js
let user = { name: "Dodi", role: "Admin" };
console.log(Object.keys(user)); // Output: ["name", "role"]
```
