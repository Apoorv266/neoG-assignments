# ES6 - Part 1

## What does ES6+ means?

- JavaScript ES6+ is a **newer version of the JavaScript programming language** that includes many new features and syntax improvements. These additions make it easier to write efficient and readable code, which can help create better web applications.
- **ES6+ stands for ECMAScript 6 and beyond**, where ECMAScript is the official name for the language specification that JavaScript is based on.

## Topic: let, const & var




## Arrow Function 

Arrow function is a syntax introduced in ES6. It is an easier way of writing functions, especially if its a one liner function that returns something.

### Let us first see how a function was created in ES5

Example, The below function takes in a and b as parameters and returns the sum of a and b.  

```
function sum ( a,b ) { 
return a+b; }
```

### Let us see how a function was created in ES6

```
const sum = ( a,b ) => { return a+b; } 
```

>Arrow function is an introduction in ES6 that makes the code more readable. 

### Variations of Arrow Function

-If you use { } in arrow function, you need to use return to return a value that you want. 

```
function add10To(num) {
	return num + 10;
}
```


-If there is just one line we don’t need to use {} and return . Arrow function automatically does that.

```
const add10To = (num) => (num + 10)
```

-If there is only one parameter, we don’t need to use ().

```
const add10To = num => num + 10;
```

### Arrow function for objects

If there is single object that has to be returned then it should be done as :-

```
const objFuncs = a => ({value: a});
```

Here, () were used for 1 line as well because, the objects {} might be understood as function blocks, therefore to let the JS know, that these are object’s bracket and not function’s. {} are used.