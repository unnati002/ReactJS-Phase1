#### Day-2
---
# Different ways of defining a variable 
---
### Variables in JS can be definied in three different ways:
* #### Variables cannot have names of the JS reserved words
* #### There are different ways in which variables are declared i.e. the *syntax*,which will be discussed below.
 ### Different ways:
 #### *1.Let*
Let is used when a variable can change its value.<br>
* #### let can be assigned :
#### 1.integers<br>2.char<br>3.null<br>4.function<br>5.another variable

| let      | syntax         | 
| ------------- |:-------------:|
||1.let variablename<br>variablename=value|
||2.let variablename=value|
 
 

#### *2.Var*
~~Var~~ is not used as much now.
| var   | syntax         | 
| ------------- |:-------------:|
||var variablename|

#### *3.const*
const is used when the variable doesnot want to change its value.<br>If we try to assign another value to const it will give a *error*<br>A const reference will never change, but the values of the object referenced by that const may change (but this is an anti-pattern)
| const   | syntax         | 
| ------------- |:-------------:|
||const variablename=value<br>value=value1~~error~~|

### Disadvantages of using var
* let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
*  let is preferable because it reduces the scope in which an identifier is visible. It allows us to safely declare variables at the site of first use. const is preferable to let .
<br>
#### EXAMPLES:
1.  *input*: let a=1;<br>
console.log(a);<br>
*output*: 1 <br>
2. *input*: var a;<br>a=100;<br>
*output*:100;<br>
3. *input*: const pi=3.14;<br>a=3XpiX2;<br>console.log(a)<br>
*output*:18.84
---
---
# Scopes in JS
---
### Scopes :
#### Scope determines the visibility or accessibility of a variable or other resource in the area of your code.

A global variable has global scope: All scripts and functions on a web page can access it. 
#### 1. Global
* A variable declared outside a function, becomes GLOBAL.

* A global variable has global scope: All scripts and functions on a web page can access it. 
##### Example:
```
//global scope<br>
var fruit = 'apple'<br>
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}

getFruit();                //apple
```



#### 2. Block 
* A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block.
*  In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the 
corresponding block.
##### Example:
```
function foo(){<br>
    if(true){<br>
        var fruit1 = 'apple';  //exist in function scope<br>
        const fruit2 = 'banana';     //exist in block scope<br>
        let fruit3 = 'strawberry';   //exist in block scope<br>

    }
    console.log(fruit1);<br>
    console.log(fruit2);<br>
    console.log(fruit3);<br>
}

foo();<br>
//result:<br>
//apple<br>
//error: fruit2 is not defined<br>
//error: fruit3 is not defined
```



#### 3. Functional 
* Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function.
 * Var is the keyword to define variable for a function-scope accessibility.
 ##### Example:
 ```
 function foo(){<br>
    var fruit ='apple';<br>
    console.log('inside function: ',fruit);<br>
}

foo();                    //inside function: apple<br>
console.log(fruit);       //error: fruit is not defined 
```

---
---
# Types of Functions in JS
---
#### A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().<br>Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).<br>The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...).<br>The code to be executed, by the function, is placed inside curly brackets: {}
### 1.Normal:
  * Function is defined with the function keyword, followed by a name, followed by parentheses() 
  * Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).<br>The parentheses may include parameter names separated by commas:(parameter1, parameter2, ...).
#### Syntax
```
function name(parameter1, parameter2, parameter3) <br>{<br>
  // code to be executed<br>
}
```



### 2.Anonymous:
* An anonymous function is a function that was declared without any named identifier to refer to it.
* As such, an anonymous function is usually not accessible after its initial creation. Normal function definition: function hello() { alert('Hello world'); } hello();
#### Syntax
```
var anon = function() {
  //code to be executed
}
```
### 3.Arrow:
* Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
* Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside arrow functions is lexically or statically defined.
#### Syntax:
```
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression;
```
```
// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
```







