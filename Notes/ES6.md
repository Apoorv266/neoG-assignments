# ES6 - Part 1

## What does ES6+ means?

- JavaScript ES6+ is a **newer version of the JavaScript programming language** that includes many new features and syntax improvements. These additions make it easier to write efficient and readable code, which can help create better web applications.
- **ES6+ stands for ECMAScript 6 and beyond**, where ECMAScript is the official name for the language specification that JavaScript is based on.

## Topic: let, const & var

### What are let, const & var?

- `let`, `const`, and `var` are all ways to declare variables in JavaScript.

- **`let`** is used to declare a variable that can be reassigned to a new value. This means that the value of the variable can be changed throughout the code.

- **`const`** is used to declare a variable that cannot be reassigned to a new value. This means that the value of the variable remains the same throughout the code.

- Redeclaration of variables declared with `let` & `const` keywords results in a `SyntaxError` whereas variables redeclared with `var` keyword will override the previous declaration.


`const` value cannot be changed. Reassigning value to `const` not possible by definition.

```js
{
const c; 
const a = 25;
const a = 26; // re-assigning is not possible  
} 
```

Here `a` is a variable and `const` is a keyword used for variable declaration.


### Scopes in javascript

- Types of Scopes in JavaScript:

- Block scope: Variables that are declared inside a { } block cannot be accessed from outside the block.

- Function scope: Variables defined inside a function are not accessible from outside the function. Each function creates a new scope.

- Global scope: Variables declared Globally (outside of any function) have Global Scope and Global variables can be accessed from anywhere in a program.

![alt text](./img3.png)

What is the scope of var, let, and const?

1. `var` can be global/functional scoped and it is used for variables that need to be redeclared and updated.

2. `let` is block-scoped and can be updated but not redeclared.

3. `const` is also block-scoped but it can't be updated or redeclared.


### Lets understand scopes with example 

```JS
    if(true){
	var a = 2;
	let b = 3;
console.log(b); // Output: 3
}
console.log(a); // Output: 2
```

Ok, so it seems let works only inside those brackets {..} and not outside. These {...} are called blocks, where code is written and let is block scoped. That means variable declared inside a block using let is not accessible outside the block, while using var → it can be accessed.

### How to redeclare variables?

Here `a` was reassigned the value of `100`, So `42` was printed. Here `a` is declared outside so it can be accessed inside, if it would have been declared inside, it couldn’t have been accessed outside. Similarly `const` keyword is used for declaring, however we **can’t reassign** a value to `const` ⇒ It will throw an **error!** 

```jsx
const a = 100;
function App() {
  a = 42;
	console.log("1",a); // TypeError: Assignment to constant variable.
}
App();
```

**What would happen, if we used `var`?**

```jsx
function something() {
    console.log(a); // Output: undefined.
    var a = 2;
}

something()

```

Here `var` does not gives reference error instead gives undefined. This is called hoisting, which we will study later. If we used `let/const` it would have given an error.

>### Key Takeaway :

1. Always use `const` unless required otherwise
2. Use `let` when you want to change the value
3. Define all variables at the top of the scope
4. Name your variables differently
5. Stop using `var` from now on



## Arrow Function 

Arrow function is a syntax introduced in ES6. It is an easier way of writing functions, especially if its a one liner function that returns something.

### Let us first see how a function was created in ES5

Example, The below function takes in a and b as parameters and returns the sum of a and b.  

```js
function sum ( a,b ) { 
return a+b; }
```

### Let us see how a function was created in ES6

```js
const sum = ( a,b ) => { return a+b; } 
```

>Arrow function is an introduction in ES6 that makes the code more readable. 

## How to convert ES5 function to ES6 ?

1. Instead of function keyword , add variable type.It is recomended to use const as functions are not reassigned.

2. After that add the function name , followed by =.

3. Now , if there are 2 or more parameters then close them in () else if there is single parameter then you can skip ().

4. Add => arrow function symbol.

5. Now open curly brackets {} and return the output else skip {} and return if there is single return statement.

```js
ES5 function :-

function sum ( a,b ) { 
return a+b; }

ES6 function :-

const sum = ( a,b ) => { return a+b; }
```


### Variations of Arrow Function

-If you use { } in arrow function, you need to use return to return a value that you want. 

```js
function add10To(num) {
	return num + 10;
}
```


-If there is just one line to return we don’t need to use {} and return . Arrow function automatically does that.

```js
const add10To = (num) => (num + 10)
```

-If there is only one parameter, we don’t need to use () in parameter as well as in return statement.

```js
const add10To = num => num + 10;
```

### Arrow function for objects

If there is single object that has to be returned then it should be done as :-

```js
const objFuncs = a => ({value: a});
```

Here, () were used for 1 line as well because, the objects {} might be understood as function blocks, therefore to let the JS know, that these are object’s bracket and not function’s. {} are used.

**Explanation**


>If we use {} the compiler would misinterpret it with a return curly braces rather than considering it as object, hence we use ( ) brackets. The curly braces here would be use for the object and the outer bracket ( ) would be used for function block.


![alt text](./img1.png)

## Default parameters

-With the help of ES6, we can pass a default parameter in case one or more parameter is missing in a function.

-With the introduction of default parameters we can set the default value of parameters which will be used when only a single argument is passed.

```js
function sum(a,b) {
	return a + b;
}
console.log(sum(2)); // Output: NaN
```

>In the above function if we pass only one argument then it can return an error because we have not passed b as argument and there is no default value for b.

#### ES5 way to add default parameter 

```js
const sum = ( a,b ) => { 
    if(b==undefined) { b=0 } 
    return a+b; } 
```
>In the above code we have initialised b with 0 if the b parameter is undefined or does not exist.

#### Lets see ES6 way to add default parameter

```js
const sum = (a, b=0) => a+b 
```

>Here as we can see, since only argument is passed to the function, the function used the default value of second parameter which is b=0 and adds 2+0 and returns the sum value 2. 

### What if we pass argument as we as default parameter ?

If both the arguments are passed then the default value will not be used. Instead the passed argument value will be used. 

```JS
const productFunc = (a, b = 2) => {
    return a * b
}

console.log(productFunc(2, 4))
// output - 8
```

>In the above example, we can see that, the default value of 2 is ignored and the argument passed that is 4 is utilized. Here 2 and 4 is multiplied to give result of 8. Instead of 2 and default value = 2 multiplication.

### How can we pass default parameter for first argument ?

```js
If we want to set a default value to the first argument, this is the way 

const multiply = (a=3,b) => a*b;
console.log(multiply(,2)); // it gives syntax error

// correct way
const multiply = (a=3,b) => a*b
console.log(multiply(undefined,2)); // output would be 6
```

>**Note :**  We have to pass undefined if we want to set a default value to the first argument.



## Destructuring and restructuring

Destructuring allows us to extract values from arrays & objects and assign them to variables in a more concise and readable way.

### ES5 way to get values from object

```JS
const newObj = { a:23, b:22 }

Now if we have to access a and b we will need to write 
Now if we have to access a and b we will need to write 

console.log(newObj.a); 
console.log(newObj.b); 
```

### ES6 way to get values from object

```js
const user = {name: "Rohan", age: "20"};
const { name, age } = user;
```

>We can rename the object properties in an object and can use them in future using **Restructuring**.


```JS
const user = {name: "Rohan", age: "20"};

const { name: userName, age: userAge } = user;  // restructuring
```

>In the above example, we first destructured name and age property from user object and then reassigned it with userName and userAge.

>See, the above variables name and age were changed to userName and userAge using restructuring.

### How to destructure arrays ?
Arrays can be destructured by using [] and then assigning a variable into it.

The order of the variables during destructuring corresponds to each value of array.

```JS
const [ a, b ] = [1,2,3,4,5,6,7,8,9,10];
console.log(a); //1
console.log(b); //2


const [ a, b, ...c ] = [1,2,3,4,5,6,7,8,9,10];
console.log(a); //1
console.log(b); //2
console.log(c); //[3,4,5,6,7,8,9,10]
```

>Destructuring can also be done in function parameters as well

```JS
const spreadExample = ({ a, b }) => {
  console.log(a, b)
}

const obj = { a: 1, b: 2 }
console.log(spreadExample(obj))
```

>In this code we have destructured a and b property from obj object while passing them as parameters.


## Rest and Spread Operators

![alt text](./img2.png)

### Rest 

- With the Rest parameter, we can create functions that can take in a variable number of arguments. These arguments are stored in an array, which can be accessed from within the function.

- indicated by the use of the spread operator followed by a parameter name with three dots `(...parameterName)`.

```JS
const restExample = (a, ...rest) => {
    console.log(a, rest);
}

console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10));
```

The output would be 2 [3, 4, 5, 6, 7, 8, 9, 10].

In the above example, a was assigned to first value of array that is a and rest of the array items will be stored in rest array with the help of rest operator(...).

### Spread

- The output would be `2 [3, 4, 5, 6, 7, 8, 9, 10]`.

- The spread operator is a way to copy the contents of one array or object into a new array or object, by using three dots (**`...`**) followed by the original array or object. example:

```JS
const myArray = [1, 2, 3];

const newArray = [...myArray, 4, 5, 6];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]
```

In the above example , we have created a newArray array by first spreading(copying) the values of myArray array and added 2 more values that is 4 and 5.

### Difference between rest and spread

1. Rest will always be used in left side and spread on right side of assignment operator during destructuring.

2. Rest will be used as a parameter in function definition, whereas spread will be used in argument while passing as to pass separate values.

### with strings

```JS
// For strings: It can be used to expand a string in an array.

const Str = 'Hi, there';
console.log([...Str]);

// ['H', 'i', ',', ' ', 't', 'h', 'e', 'r', 'e']
```