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

```typescript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
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

  ```typescript
  const appleStream = of("Apple1", "Apple2");
  const appleStream = from(["Apple1", "Apple2"]);
  ```

- **fromEvent()**
- **interval()**
- ...

### Observer

An observer consists of any of three optional functions:

```typescript
const observer = {
  next: (apple) => console.log(`Apple was emitted ${apple}`),
  error: (err) => console.log(`Error occurred: ${err}`),
  complete: () => console.log(`No more apples, go home`),
};
```

### Operators

Except for creation operators, there are also a ton of operators for transformation, filtering, joining, aggregating...

- **map()**: Transforms each value in the stream
- **tap()**: Your best friend when debugging
- **take()**: Limits the amount of values in the stream to be processed
- ...

We can pipe an observable stream through a set of these operators using pipe():

```typescript
of(2, 4, 6)
  .pipe(
    map((item) => item * 2),
    tap((item) => console.log(item)),
    take(2)
  )
  .subscribe(console.log);
```

_See [here](https://rxjs.dev/guide/operators) for a list of all operators. Using the 'Operator Decision Tree' on this page we can easily find the right operator for the job._

Under the hood of the map operator:

```typescript
import { Observable } from "rxjs";

export function map(fn) {
  return (input) =>
    new Observable((observer) => {
      return input.subscribe({
        next: (value) => observer.next(fn(value)),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });
    });
}
```

### Async Pipe

The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.

```typescript
products$ = this.productService.products$;
```

```html
products$ | async
```

Benefits:

- No need to subscribe
- No need to unsubscribe
- Option to improve performance by modifying change detection

_Angular uses **change detection** to track changes to application data structures, so it knows when to update the UI with changed data._

```
@Component({
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

**Default**

It uses the default _CheckAlways_ strategy, in which change detection is automatic until explicitly deactivated.

**OnPush**

Only detects changes made to input properties and events from child components and observables bound in the template using an async pipe.

Triggers when:

- An @Inputs() changes
- A component event handler gets triggered
- An observable linked to the template via the async pipe emits a new value

It uses the _CheckOnce_ strategy, meaning that automatic change detection is deactivated until reactivated by setting the strategy to Default (CheckAlways). Change detection can still be explicitly invoked. This strategy applies to all child directives and cannot be overridden.

Pitfalls:

- Avoid direct object mutation
- Avoid manually subscribing in ngOnInit

For more, read [this](https://blog.angular-university.io/onpush-change-detection-how-it-works/).

### Catch Error

The operator 'catchError()' is an error handling operator:

- Takes in an input stream, subscribers
- Creates an output stream

When a source item is emitted:

- Item is emitted to the output stream

If an error occurs:

- Catches the error
- Unsubscribes from the input stream
- Returns a replacement Observable
- Optionally rethrow the error

```typescript
return this.http.get<Product[]>(this.productUrl).pipe(
  catchError((err) => {
    console.error(err);
    return of([
      { id: 1, productName: "cart" },
      { id: 2, productName: "hammer" },
    ]);
  })
);
```

### Trow Error

The operator 'throwError()' is a creation function. It creates an Observable that emits no items.

- Observable<never>
- Immediately emits an error notification

```typescript
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productUrl).pipe(
    catchError(this.handleError)
  );
}

private handleError(err) {
  ...
  return throwError(errorMessage);
}
```

### Declarative Approach

Declarative vs procedural:

- Leverage the power of RxJS Observables and Operators
- Effectively combine streams
- Easily share observables
- Readily react to user actions
- No onInit / onDestroy

Service:

```typescript
products$ = this.http.get<Product[]>(this.productsUrl);
```

Component:

```typescript
products$ = this.productService.products$;
```

### Combining Streams

- Combining to single stream
  - Merge
  - Concat
- Flattening Higher order Observables
  - MergeAll
- Emitting combined values
  - CombineLatest
  - ForkJoin
  - WithLatestFrom

### Subject / BehaviorSubject

What is a Subject? An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

_A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners._

They are both an observable and an observer.

Compared to a Subject, BehaviorSubject takes in an initial value. We could also pipe the observable from a subject using the startWith() operator to set an initial value.

### Merge

Combination function:

- Takes a set of streams, subscribes
- Creates an output stream
- Emits an item in output-stream whenever an item is emitted from any of the input-streams
- Completes when all input streams complete

### Scan

A transformation operator that accumulates items from a stream

- Takes in an input stream, subscribes
- Creates an output stream
- Items emitted are accumulated as specified by a provided function
- Intermediate results are emitted to the output stream

Used for:

- Totalling amounts
- Accumulation items into an array

### Caching

Why:

- Improves responsiveness
- Reduces bandwidth and network consumption
- Reduces backend server load
- Reduces redundant computations

shareReplay() is a multicast operator:

- Returns a Subject that shares a single subscriptionto the underlying source
- Takes in an optional buffer size, which is the number of items cached and replayed
- On a subscrive it replays a specified number of emissions
- The items stay cached forever, even after there are no more subscribers

Used for:

- Caching data in the application

### Cache Invalidation

Evaluate:

- Fluidity of the data

  If there are a lot of changes, caching might not be a good idea.

- Users behavior (application runtime?)

  If the application gets closed often cache will be cleared

Consider:

- Invalidation the cache on a time interval
- Allowing the user to control when data is refreshed
- Always getting fresh data on update operations

### Higher Order Observables

Bad practice of nested subscriptions:

```typescript
of(3, 7);
pipe(map((id) => this.http.get<Supplier>(`${this.url}/${id}`))).subscribe((o) =>
  o.subscribe()
);
```

- This makes the code more error prone and complex.
- It will not work with an async pipe.
- We can't unsubscribe.

To prevent this, we should use higher-order mapping operators:

- concatMap
- mergeMap
- switchMap

_They automatically subscribe and unsubscribe from the inner Observables, and flatten and emit the resulting values to the output observable._

### Related Data Streams

- Get it all
  - Declarative pattern
  - Combine streams
  - Displays instantly
  - Gets all data
- Just in time
  - More complex code
  - Higher order mapping operators
  - Display delay
  - Only retrieves required data

### Ancillary Streams

---

Date of creation: 5-28-2021
