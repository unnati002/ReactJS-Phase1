#### Day-3
---
# Node JS
---
### Defination:
* Node.js is an open source server environment
* Node.js is free
* Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
* Node.js uses JavaScript on the server
### What can Node JS do?
* Node.js can generate dynamic page content
* Node.js can create, open, read, write, delete, and close files on the server
* Node.js can collect form data
* Node.js can add, delete, modify data in your database
### What is NodeJS file?
* Node.js files contain tasks that will be executed on certain events
 * A typical event is someone trying to access a port on the server
* Node.js files must be initiated on the server before having any effect
* Node.js files have extension ".js"

### Advantages of NodeJS
1. Node.js offers an Easy Scalability
2. Easy to Learn
3. Node.js is used as a Single Programming Language
4. The Benefit of Fullstack JS
5. Node.js is Highly 

### Diaadvantages of Node JS
1. Application Programming Interface (API) is Not Stable
2. Does not have a Strong Library Support System
3. Asynchronous Programming Model
---
# Eventloop
---
### Defination
* The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

* Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.


### The following diagram shows a simplified overview of the event loop's order of operations.
---
<center>
    <img src="https://raw.githubusercontent.com/unnati002/ReactJS-Phase1/master/eventloop.png" align="center" height="500">
</center>

### Phases
* *timers*: this phase executes callbacks scheduled by setTimeout() and setInterval().
* *pending callbacks*: executes I/O callbacks deferred to the next loop iteration.
* *idle, prepare*: only used internally.
 * *poll*: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
* *check*: setImmediate() callbacks are invoked here.
* *close callbacks*: some close callbacks, e.g. socket.on('close', ...).
---
---
# Promise
---
### Defination
A Promise object represents a value that may not be available yet, but will be resolved at some point in the future. It allows you to write asynchronous code in a more synchronous fashion. For example, if you use the promise API to make an asynchronous call to a remote web service, you will create a Promise object which represents the data that will be returned by the web service in future. The caveat is that the actual data isn’t available yet. It will become available when the request completes and a response comes back from the web service. In the meantime, the Promise object acts like a proxy to the actual data. Furthermore, you can attach callbacks to the Promise object, which will be called once the actual data is available.
### How to create a new promise
```
const promise = new Promise((resolve, reject) => {
  //asynchronous code goes here
});
```
### State of promise
There are three states of promise:
1. pending (not fulfilled or rejected)
2. fulfilled
3. rejected

*  If the promise was rejected and then() does’t have a failure callback, the control will move forward to the next then() with a failure callback or the next catch().
*  Apart from explicit promise rejection, catch() is also called when any exception is thrown from the Promise constructor callback. So you can also use catch() for logging purposes. Note that we could use try...catch to handle errors, but that’s not necessary with promises, as any asynchronous or synchronous error is always caught by catch().
#### Example
<center>
    <img src="https://raw.githubusercontent.com/unnati002/ReactJS-Phase1/master/promise.png" >
</center>
We start by instantiating a new Promise object and passing it a callback function. The callback takes two arguments, resolve and reject, which are both functions. All your asynchronous code goes inside that callback. If everything is successful, the promise is fulfilled by calling resolve(). In case of an error, reject() is called with an Error object. This indicates that the promise is rejected.

----
----
----
