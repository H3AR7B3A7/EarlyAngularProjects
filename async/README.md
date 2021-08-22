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

## Async/await

There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

Example:

```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

The keyword 'async' before a function means one simple thing, a function always returns a promise. Other values are wrapped in a resolved promise automatically.

The keyword 'await' makes JavaScript wait until that promise settles and returns its result.

## RxJS

Reactive development is:

- Quick to react to user interactions
- Resilient to failure
- Reactive tot state changes

RxJs stands for "Reactive Extension for JavaScript". The RxJS library defines its own Observable class along with supporting methods for Reactive programming.

Advantages:

- One technique to rule them all
- Compositional
- Watchful
- Lazy
- Handles errors
- Cancellable

Used in Angular for:

- Routing
- Reactive forms
- HttpClient

### Observable

Observables are lazy Push collections of multiple values. They are functions that throw values. Objects called observers subscribe to these values. Observables create a pub-sub system based on the observable design pattern. This makes observables popular with async programming in modern JavaScript frameworks like Angular and libraries like React.

Unlike Promises, observables are not yet inherit to JavaScript. This is why Angular and React rely on the RxJS library for implementing observables.

### Observable Creation Operators

- **of() & from()**

  Observable creation function for individually defined variables or data structures:

  ```
  const appleStream = of('Apple1', 'Apple2')
  const appleStream = from(['Apple1', 'Apple2'])
  ```

- **fromEvent()**
- **interval()**
- ...

### Observer

An observer consists of any of three optional functions:

```
const observer = {
  next: apple => console.log(`Apple was emitted ${apple}`),
  error: err => console.log(`Error occurred: ${err}`),
  complete: () => console.log(`No more apples, go home`)
}
```

### Operators

Except for creation operators, there are also a ton of operators for transformation, filtering, joining, aggregating...

- **map()**: Transforms each value in the stream
- **tap()**: Your best friend when debugging
- **take()**: Limits the amount of values in the stream to be processed
- ...

We can pipe an observable stream through a set of these operators using pipe():

```
of(2, 4, 6)
  .pipe(
    map(item => item *2),
    tap(item => console.log(item)),
    take(2)
  ).subscribe(console.log)
```

_See [here](https://rxjs.dev/guide/operators) for a list of all operators. Using the 'Operator Decision Tree' on this page we can easily find the right operator for the job._

---

Date of creation: 5-28-2021
