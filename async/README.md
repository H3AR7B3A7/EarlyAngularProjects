# Async

Created to experiment with different ways to handle async operations.
Be aware that part fo the experiment was to explore the difference between the old and the modern approaches.

## Callback

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

They don't have to be, but are usually async. You can also pass in a function, in which you pass in a function ... and so and, to very easily end up in what is called callback-hell.

## Promise

Promises are the new style of async code that you'll see used in modern Web APIs. The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

- **Pending**: initial state, neither fulfilled nor rejected.
- **Fulfilled**: meaning that the operation was completed successfully.
- **Rejected**: meaning that the operation failed.

![Promises](promises.png)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

Promise.prototype.finally() is called when the promise is settled, whether fulfilled or rejected.

## RxJS

RxJs stands for "Reactive Extension for JavaScript". The RxJS library defines its own Observable class along with supporting methods for Reactive programming.

### Observable

Observables are lazy Push collections of multiple values. They are functions that throw values. Objects called observers subscribe to these values. Observables create a pub-sub system based on the observable design pattern. This makes observables popular with async programming in modern JavaScript frameworks like Angular and libraries like React.

Unlike Promises, observables are not yet inherit to JavaScript. This is why Angular and React rely on the RxJS library for implementing observables.

---

Date of creation: 5-28-2021
