# Getting Started With Angular

[Official Angular Pages](https://angular.io/)

Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.

### Installation

- **Install NPM & Node.js**: Download installer [here](https://nodejs.org/en/download/).
- **Install Typescript**: npm install -g typescript
- **Install Angular**: npm install -g @angular/cli

### Some libraries

- Material
> ng add @angular/material

- Flex Layout
> npm i @angular/flex-layout

See: [Flexbox Layout Examples](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

### VSC Extensions:

- Angular Essentials
- Angular Language service
- Angular Snippets
- Nx Console
- TSLint
- Material Icon Theme


## Creating a Project

Navigate to the desired folder and use following commands:

> ng n <name>
> ng serve


# Typescript

[Official Typescript pages](https://www.typescriptlang.org/)

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.  
Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.


## Let

We use 'let' instead of 'var' to make sure our variable doesn't leak outside the scope:

    let i = 3;
    for (let i = 0; i < 10; i++){
        ...
    }

This will transpile to:

    var i = 3;
    for(var i_1 = 0; i_1 < 10; i_1++>){
        ...
    }


## Const

We should prefer to use 'const' where ever possible to create constants, or variables that never change.
This goes only for the top level of the variable, and thus object properties can still be changed.


## Types

Most of the time Typescript is able to figure out what type a variable is supposed to hold through _Type Inference_. Even when we did not clearly state a variables type, TypeScript will not transpile if we assign it the wrong type of variable.

### String

    const brand: string = 'Chevrolet';

### Number

    const age: number = 31;

### Boolean

    const isNegative: boolean = false;

### Array

    const brands: string[] = ['Ford','GM','Tesla'];

### Any

    const distances: any[] = ['1000km', 1000];

### Custom Type

    type Pet = 'Cat' | 'Dog';
    const pet: Pet = 'Cat';

### Enum

    enum Brands { Ford, GM, Tesla, Nio};
    const myCar: Brands = Brands.Tesla;
    const carAtIndex: string = Brands[1]; // Result = GM

    enum Brands { Ford = 1, GM, Tesla, Nio};
    const carAtIndex: string = Brands[1]; // Result = Ford

    enum DistanceFromSun {
        Mercury = 57900000,
        Venus = 108200000,
        Earth = 149600000,
        Mars = 227900000,
        Jupiter = 227900000,
        Saturn = 1427000000,
        Uranus = 2871000000,
        Neptune = 4497100000
    };

### Void

As in other languages we use this type to annotate that a function does not return a value.


## Functions

### Optional Parameters

We can use optional params, but they have to go last:

    function greet(name: string, greeting?: string): string {
        if(!greeting){
            greeting = 'Hello';
        }
        return greeting + ', ' + name;
    }

### Default Parameters

With a default param we can simplify previous code snippet:

    function greet(name: string, greeting: string = 'Hello'): string {
        return `${greeting}, ${name}`;
    }

Also note the **template string** in back-ticks with **string substitutions**.

### Rest Parameters

With rest params we can define an unknown amount of parameters.

    function greetEveryone(greeting: string, ... names: string[]): string {
        return greeting + ', ' + names.join(' and ') + '!';
    }

### Function Overloading

JavaScript does not implement an elegant way to overload functions, so we need to write function declarations for each of the overloads before writing the general-purpose function that wraps the actual implementation:

    function hello(names: string): string {}
    function hello(names: string[]): string {}
    function hello(names: any, greeting?: string): string {
        let namesArray: string[];
        if (Array.isArray(names)){
            namesArray = names;
        } else {
            namesArray = [names];
        }
        ...
    }

Notice that we had to check for the true type of the param of _any_ type.

### Arrow Functions

The fat arrow function or Lambda:

    const double = x => x * 2;

Braces are required with multiple arguments:

    const sum = (x, y) => x + y;

Curly braces are required when containing statements:

    const doubleOfSum = (x, y) => {
        const sum = x + y;
        return sum * 2;
    }

But arrow functions also allows lexical scoping of _this_:

    function delayedGreeting(name): void {
        this.name = name;
        this.greet = function(){
            setTimeout(() =>
            console.log('Hello ' + this.name), 0);
        }
    }

If we were to use the actual function instead of the arrow function this.name would be _Undefined_.


## Common Typescript Features

### Spread parameter

We can use spread parameters in arrays or objects to not have to repeat ourselves:

    const oldArray = [1, 2];
    const newValue = 3;
    const newArray = [...oldArray, newValue];

Notice how the original array did not change, we call this principle **immutability**. Instead of changing it we created a new state.

### Generics

In collections or constructs like methods we can make use of generics to code behavior that we can employ, regardless of the type of data.

    function method<T>(arg: T): T{
        return arg;
    }

Or with an array of a generic type:

    function method<T>(arg: T[]): T[]{
        return arg;
    }

We can either create an array of some type or extend the array to a custom type to pass a valid argument to this function.  
We can also say a generic type should adhere to some interface:

    interface Shape {
        area(): number;
    }
    function allAreas<T extends Shape>(...args: T[]): number {
        let total = 0;
        args.forEach (x => {
            total += x.area();
        });
        return total;
    }

Now we can create multiple classes implementing the Shape interface with their own area() methods and pass them to allAreas().


## Classes, Interfaces and Inheritance

### Constructor Parameters with Accessors

A class fully written out contains a lot of 'boilerplate' code:

    class Car {
        make: string;
        model: string;

        constructor(make: string, model: string){
            this.make = make;
            this.model = model;
        }
    }

Typescript makes writing this a breeze, by allowing accessors in the constructor params:

    class Car {
        constructor(public make: string, public model: string)
    }

Typescript will create the public fields and assignments for us.

### Interfaces

We use interfaces as blueprints of code that define a particular schema. Artifacts (classes, function signatures, etc.) implementing an interface should comply with this schema.

    interface Vehicle {
        make: string;
    }

    class Car implements Vehicle {
        make: string;
    }

This way we make sure every vehicle has the field 'make'. We use this to create consistency in our code.  
Interfaces can also contain optionals:

    interface Exception {
        message: string;
        id?: number;
    }

We can do more with interfaces than just implement them and build more complex ones:

    interface ErrorHandler {
        exceptions: Exception[];
        logException(message: string, id?: number): void
    }

Or define interfaces for standalone object types, useful to define a templated constructor or method signature:

    interface ExceptionHandlerSettings {
        logAllExceptions: boolean;
    }

Here is an example of the implementation of these:

    class CustomErrorHandler implements ErrorHandler {
        exceptions: Exception[] = [];
        logAllExceptions: boolean

        constructor(settings: ExceptionHandlerSettings){
            this.logAllExceptions = settings.logAllExceptions;
        }
        logException(message: string, id?: number): void{
            this exceptions.push({message, id});
        }
    }

We can also **instantiate interfaces** in typescript, without involving any classes:

    interface A {
        a
    }
    const instance = <A> { a: 3};
    instance.a = 5;

This means you can create a **mocking library** very easily.

### Interfaces and Mocking

This instantiation of interfaces helps mocking frameworks to mock our dependencies. What happens behind the curtains looks something like this...

Our code:

    interface AuthService {
        isAuthenticated
    }

    class Stuff {
        constructor(private AuthService){}

        execute(){
            if(srv.isAuthenticated()){ console.log('access granted') }
        } else { console.log('you do not have access') }
    }

Mock:

    class MockAuthService implements AuthService {
        isAuthenticated(){ return true; }
    }

    const srv = new MockAuthService()
    const stuff = new Stuff(srv);

We can instead simply create a mock by instantiating the interface instead:

    const authServiceInstance = <AuthService>{};

However, **be aware** that you are responsible for adding required method(s), because it starts as an empty object.

### Class Inheritance

We can also extend members and functionality from other classes using inheritance. In the following example Sedan inherits the member 'make'. Like in other OOP languages we can overwrite methods if needed and we can use the parent constructor using the super() method:

    class Sedan extends Car {
        model: string;
        constructor(make: string, model: string){
            super(make);
            this.model = model;
        }
    }


## Decorators

Decorators are a way to add metadata to class declarations for use by dependency injection or compilation directives. By creating decorators, we are defining special annotations (@Something) that may have an impact on the way our classes, methods or functions behave or just alter the data we define in fields or parameters.

### Class Decorator

Here is a simple example:

    function Banana(target: Function): void {
        target.prototype.banana = function(): void {
            console.log('We have bananas!')
        }
    }

    @Banana
    class FruitBasket {
        constructor(){}
    }

    const basket = new FruitBasket();
    basket.banana();

With a custom signature:

    function Banana(message: string){
        function Banana(target: Function) {
            target.prototype.banana = function(): void {
                console.log(message)
            }
        }
    }

    @Banana('Delicious bananas!!!')
    class FruitBasket {
        constructor(){}
    }

### Property Decorator

Could be used to log log the values assigned to class fields when instantiating objects:

    function Jedi(target: Object, ke: string){
        let propertyValue: string = this(key);
        if (delete this[key]){
            Object.defineProperty(target, key, {
                get: function(){
                    return propertyValue;
                },
                set: function(newValue){
                    propertyValue = newValue;
                    console.log(`${propertyValue} is a Jedi`);
                }
            });
        }
    }

    class Character{
        @Jedi
        name: string;
    }

    const character = new Character();
    character.name = 'Luke';

Or when reacting to data changes:

    function NameChanger(callbackObject: any): Function{
        return function(target: Object, key: string): void {
            let propertyValue: string = this[key];
            if (delete this[key]){
                Object.defineProperty(target, key, {
                    get: function() {
                        return propertyValue;
                    },
                    set: function(newValue){
                        propertyValue = newValue;
                        callbackObject.changeName.call(this, propertyValue);
                    }
                });
            }
        }
    }

    class Character{
        @NameChanger({
            changeName: function(newValue: string): void{
                console.log(`You are now known as ${newValue}`);
            }
        });
        name: string;
    }

    let character = new Character();
    character.name = 'Anakin';

This will trigger the custom function 'changeName()' when the name property is changed.

### Method Decorator

It is used to detect, log or intervene. Logging example:

    function Log(){
        return function(target, propertyKey: string, descriptor: PropertyDescriptor){
            const oldMethod = descriptor.value;
            descriptor.value = function newFunc(...args:any[]){
                let result = oldMethod.apply(this, args);
                console.log(`${propertyKey} is called with ${args.join(', ')} and result ${result}`);
                return result;
            }
        }
    }

    class Hero{
        @Log()
        attack(...args:[]){ return args.join(); }
    }

    const hero = new Hero();
    hero.attack();

### Parameter Decorator

Used to look into the parameter value of functions or constructors and perform operations elsewhere, such as logging or replicating data:

    function Log(target: Function, key: string, parameterIndex: number){
        const functionLogged = key || target.prototype.constructor.name;
        console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`);
    }

    class Greeter {
        greeting: string;

        constructor(@Log phrase: string){
            this.greeting = phrase;
        }
    }


## Advanced Types

### Partial

Object that includes only _part_ of an interface:

    interface Hero {
        name: string;
        power: number;
    }

    const hero: Partial<Hero> = {
        name = 'Iron Man';
    }

### Record

How we create dictionaries in Typescript:

    interface Hero {
        powers: {
            [key: string]: number
        }
    }

Or with a Record:

    interface Hero {
        powers: Record<string, number>
    }

### Union

We can mix types with unions:

    interface Hero {
        powers: number[] | Record<string, number>;
    }

### Nullable

We can allow Types to be null or undefined:

    interface Hero {
        powers: number[] | null | undefined;
    }

_Note to check nullable values before using them!_
**Optional chaining**:

    for (let i = 0; i < hero.powers?.length; i++){
        ...
    }

### Modules

Export from file 'my-service':

    export class MyService {
        getData() { ... }
    }

Import:

    import { MyService } from './my-service';


# Angular

## Components

### Create a Component

> ng generate component <name>

--dry-run (Run without making changes to see what would happen)  
--skip-tests (Don't generate spec.ts)  
--inline-style (Don't generate stylesheet)  
--inline-template (Don't generate html template)
--flat (Generate without parent folder)  

Example component decorator:

    @Component({
        selector: 'app-hero',
        templateUrl: './hero.component.html',
        styleUrls: ['./hero.component.css']
    })

To render the template of the new component we add the selector to _app.component.html_:

    <app-hero></app-hero>

### Binding Components in Templates

See _[testProject](testProject)_ for examples of:

- Variable Binding
- Class Binding
- Style Binding
- Event Binding
- Input Binding
- Output Binding
- Local References

### Encapsulating CSS Styling

ViewEncapsulation enumeration values:

- Emulated: Default, an emulation of native scoping in shadow DOM
- Native: Only works in browsers that support shadow DOM
- None: No encapsulation

Example:

    import { Component, ViewEncapsulation } from '@angular/core';

    @Component({
        selector: 'app-hero',
        templateUrl: './hero.component.html',
        styleUrls: ['./hero.component.css'],
        encapsulation: ViewEncapsulation.Emulated
    })

### Changing Detection Strategies

Every component has a _'change detector'_ that compares changed properties with their previous values. This can be a performance bottleneck for components that render hundreds of items in a list. In this case we might want to use the \*_OnPush_ strategy which only triggers the change detection when the reference of _@Input_ properties change.

Example:

    import { Component, ChangeDetectionStrategy } from '@angular/core';

    @Component({
        selector: 'app-hero',
        templateUrl: './hero.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })


## The Component Lifecycle

Available lifecycle hooks:

- OnInit
- OnDestroy
- OnChanges
- DoCheck
- AfterContentInit
- AfterContentChecked
- AfterViewInit
- AfterViewChecked

### The OnInit Interface

The _ngOnInit()_ method is called upon the initialization of a component. At this point all input bindings and data-bound properties have been set. The _OnInit_ hook can for example be used to initialize components with data from external sources.

### The OnDestroy Interface

The _ngOnDestroy()_ method is called upon destruction of a component. Components get destroyed through using the _ngIf directive_ or by _routing_ to other components using a URI. When this happens it can be useful to use the OnDestroy interface to clean up:

- Resetting timers & intervals
- Unsubscribing from observable streams

### The OnChanges Interface

The _ngOnChanges()_ method is called when the binding of a value changes. It accepts an object of type SimpleChanges as a parameter. The resulting objects holds a previousValue and currentValue, but also a boolean which tells us wether it is the 'first' change.


## Directives

Directives are HTML attributes that extend the behavior or the appearance of standard HTML elements. When we apply them to an HTML element or even an Angular component, we can add custom behavior to it or alter its appearance. There are three types:

- Components
- Structural directives
- Attribute directives

Built in _structural directives_:

- ngIf
- ngFor
- ngSwitch

See _[jestProject](jestProject)_ for more examples.

To create just an interface model:
>ng generate interface <name> --type=model

### ngIf

Used for the conditional rendering of HTML elements in the DOM.

    <p *ngIf="team === 'Avengers'; else noHero">{{ name }} is an avenger!</p>
    <ng-template #noHero>
        <p>No avengers found</p>
    </ng-template>

### ngFor

Used for iterating through a collection of elements and rendering a template for each one.

    <ul>
      <li *ngFor="let hero of listOfHeroes>
        {{ hero.name }}
      </li>
    </ul>

### ngSwitch

Used as a switch statement evaluating some property and rendering the appropriate HTML element.

    <ng-container [ngSwitch]="hero.team">
      <div *ngSwitchCase="'Avengers'">{{ hero.name }} is an Avenger.</div>
      <div *ngSwitchCase="'Justice League'">{{ hero.name }} is in the Justice League.</div>
    </ng-container>


## Pipes

Pipes allow us to filter and map the outcome of our expressions on a view level. They transform data in the desired format and display the output in the template.

Some default examples:

    <p>{{ 'Example' | uppercase }}</p>
    <p>{{ 'Example' | lowercase }}</p>
    <p>{{ 0.123 | percent }}</p>
    <p>{{ 100 | currency }}</p>
    <p>{{ 100 | currency:'EUR' }}</p>
    <p>{{ listOfHeroes | slice:2:4 }}</p>
    <p>{{ today | date }}</p>
    <p>{{ today | date:'fullDate' }}</p>
    <p>{{ hero | json }}</p>
    <p>{{ delayedHero | async }}</p>


## Custom Pipes

To create a pipe *in the current directory*:
>ng generate pipe <name>

Pipes are pure by default, which means they will not update when a value gets changed, only when a new value is assigned. So when we add an object to an existing array or change a value of an object and want it to be affected by the pipe we create a new array/object (immutability principle):

    listOfHeroes: Hero[] = [...heroes, heroX];

To change this behavior we can also make the pipe impure:

    @Pipe({
      name: 'sort',
      pure: false
    })

If the object changes a lot and they are many, this can affect performance.

## Custom Directives

To create a directive *in the current directory*:
>ng generate directive <name>


## Modules

See _[ModulesAndStructure](ModulesAndStructure)_ for examples on the following topics. 

To create a module:
>ng generate module <name>

--dry-run (Run without making changes to see what would happen)  
--flat (Generate without parent folder)  
--routing (Generate routing module)

They contain:
- Declarations: Registered components, directives and pipes
- Imports: Other modules containing declarations to be used by this module
- Exports: Artifacts available for other modules (aka the public API)
- Providers: Provided services, accessible from any module
- Bootstrap: Main component, 'AppModule'

### Registering Components with a Module

You can do this by running the command inside the module folder or using the module option.

Using the module option:
>ng generate component cars/carList --module=cars

### Exposing Module Features

To be able to add the the features template to the apps template using the selector we need to:
- Add the component to the exports in the features module.ts. 
- Import the module in app.module.ts.

### Module Separation

By functionality:
- **Root** module: The main module, 'AppModule'
- **Feature** modules: A set of functionalities (ex: Orders, Products, Customers, ...)
- **Core** modules: Application wide artifacts (ex: Navbar, Footer, Loading spinner, ...)
- **Shared** modules: Reusable artifacts imported by different feature modules

By loading:
- **Eager** loaded modules: Declared in imports
- **Lazy** loaded modules: Through navigation


## Configuration & Environments

We can run commands in different environments by using the following option in the CLI:
>ng <command> --configuration=<name>

We can add other environments to the defaults (development and production) by creating the matching configuration files in the *environments folder*. The naming convention to follow here is: *environment.{name}.ts*.

The environment file exports an environment object. By default a boolean 'production' property is already set. We need to define all required properties in this object. For example the URL of the backend API will be set here.

When we created the environment, we can define the appropriate configurations in the *angular.json*: 

    "configurations": {
        "production": {
            "fileReplacements": [
                {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                }
            ]
        }
    }

When running **ng build --configuration=production** the CLI will replace the default environment file with the one for production.

## Dependency Injection

In previous examples our data was tightly coupled to our component, meaning it was declared inside them.
- In real world application our data is rarely static.
- We only want our component to handle 'presenting' the data, and not be concerned on how to get the data.

We can generate a **service** that we can use to inject our data in any class that needs it.
>ng generate service cars/car



### Share a Dependency Through Components

Add selector to parent template:

    <app-favorite-cars></app-favorite-cars>

Add the service to providers in parent component:

    @Component({
        selector: 'app-car-list',
        templateUrl: './car-list.component.html',
        styleUrls: ['./car-list.component.css'],
        providers: [CarService]
    })

#### Restricting DI Down the Tree

We can restrict DI down to only one level by using the 'viewProviders' attribute:

    @Component({
        selector: 'app-car-list',
        templateUrl: './car-list.component.html',
        styleUrls: ['./car-list.component.css'],
        viewProviders: [CarService]
    })

#### Restricting Provider Lookup

The **@Host()** decorator will prevent bubbling up the hierarchy to look for the dependency, it will instead throw an exception.

    constructor(@Host() private carService: CarService) { }

The **@Optional()** decorator will prevent this error.
The **@SkipSelf()** and **@Self()** decorators will respectively make the injector skip or check the local injector of the current component. When skipping it will start looking higher in the hierarchy.

#### Overriding Providers

The provider argument we used before was a shorthand for:

    providers: [{provide: CarService, useClass: CarService}]

The useClass property overwrites the initial implementation. It could also take a factory function that returns one of multiple services depending on a condition:

    export function carFactory(isFavorite: boolean){
        return () => {
            if (isFavorite) {
                return new FavoriteCarService();
            }
            return new CarService();
        };
    }
    ...
    providers: [{provide: CarService, useFactory: carFactory(true)}]

If the 2 services also inject other dependencies into their constructor, we have to add them to the **deps** property of the provide object literal:

    providers: [{provide: CarService, useFactory: carFactory(true), deps: [HttpClient]}]

And inject it into the factory:

    export function carFactory(isFavorite: boolean){
        return (http: HttpClient) => {
            if (isFavorite) {
                return new FavoriteCarService();
            }
            return new CarService();
        };
    }

### Dependency Injection of Values

When the dependency we want to provide is not a class, but a value, we can use the **useValue** syntax:

    export interface AppConfig {
        title: string,
        version: number
    }

    export const appSettings: AppConfig = {
        title: 'My app'
        version: 1.0
    ;}

We can't pass an interface to providers, so we create an **InjectionToken**:

    export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
    ...
    providers: [{provide: APP_CONFIG, useValue: appSettings}]
    ...
    constructor (@Inject(APP_CONFIG) config: AppConfig){
        this.title = config.title;
        this.version = config.version;
    }


## Asynchronous Data Services

Strategies:
- Callback
- Promise
- Observables

### Callback Hell

    getRootFolder(folder => {
        getAssetsFolder(folder, assets => {
            getPhotos(assets, photos => {
                ...
            })
        })
    })

### Promises

    getRootFolder()
        .then(getAssetsFolder)
        .then(getPhotos)

Limitations:
- They cannot be canceled
- They are immediately executed
- They are one time operations, no easy retry
- They respond with only one value

### Observables

Observables will emit values over a period of time.
To create an observable:
- Operator "of"
- Keyword "new" Observable

*It is good practice to name observable variables ending with "$".*

Observables maintain a list of observers and inform them of data changes.
- **Subscribe** : We can subscribe to an observable to follow multiple changes.
- **toPromise** : We can use it to get a promise (single change).
- **pipe** : We can pipe observed changes before subscribing to them.
The pipe method allows for multiple params (from 'rxjs/operators') manipulating data like a recipe. 

### Reactive Functional Programming

A programming paradigm for reactive programming (asynchronous dataflow programming) using the building blocks of functional programming (e.g. map, reduce, filter). FRP has been used for programming graphical user interfaces (GUIs), robotics, games, and music, aiming to simplify these problems by explicitly modeling time.

### Angular In Memory Web API

An in-memory web api for Angular demos and tests (not for production) that emulates CRUD operations over a REST API. It intercepts Angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.

- Install the package
> npm install angular-in-memory-web-api --save-dev

- Generate a service
> ng g s services/data --skip-tests

- Make the DataService class implement InMemoryDbService
- Implement the 'createDb' function and make it return an array (with or w/o data)
- Add HttpClientInMemoryWebApiModule.forRoot(DataService) to the imports in the module.ts

*We use .forRoot to implement the service as a singleton for the whole application.*

### HttpClientModule

The HttpClientModule provides a variety of Angular services that we can use to handle asynchronous HTTP communication.

The HttpClient service has methods representing all the possible HTTP verbs and return observable streams we can subscribe to.

### Auth Interceptor

We can create a service and implement HttpInterceptor, or we can use:
> ng g interceptor auth

That implements the method:
```
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
}
```

And add a provider to the module:
```
providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService;
        multi: true
    }
],
```

### Handling HTTP Errors

We can pipe our HTTP requests to catch errors using catchError:
```
import { catchError, retry } from 'rxjs/operators'
...
getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(heroesUrl).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
            console.error(error)
            return throwError(error)
        })
    )
}
```
*We can also easily add some retry logic.*

### Cleaning Up Resources

- Unsubscribe from observables manually
- Use the *async* pipe








## Testing

### Testing With(out) Testbed

When Angular CLI generates components it also generates tests in *.spec.ts. These contain some boilerplate implementing a testbed for template testing, like in [this default example](jestProject/src/app/heroes/heroes.component.spec.ts). When we aren't testing against the template however, we can speed up testing by not using the testbed like in [this faster example](testProject/src/app/hero/hero.component.spec.ts).

### Common commands

> ng test  
> npm test  
> ng test --watch false  
> npm test --watch false  
> ng test --code-coverage  
> ng test --karma-config karma.conf.js --watch false

To always get code coverage, edit _angular.json_:

    "test": {
        "options": {
            "codeCoverage": true
        }
    }

To run tests on _Edge_ browser:

> npm install karma-edge-launcher --save-dev

To run tests on _FireFox_ browser:

> npm install karma-firefox-launcher --save-dev

And edit _karma.conf.js_:

    plugins: [
        require('karma-edge-launcher'),
        require('karma-firefox-launcher')
     ]
    ...
    browsers: ['Chrome','Edge','Firefox']

Or don't edit browsers array and run individually:

> ng test --browsers Edge  
> ng test --browsers Firefox

## Testing with Other Frameworks

### Jest

[Full Migration Manual](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/)

Automated migration:

> ng add @briebug/jest-schematic

Common commands:

> ng test  
> npm test  
> ng test --coverage  
> npx jest --coverage  
> ng test --watch  
> npx jest --watch  
> ng test --watchAll  
> npx jest --watchAll

### Mocha

[Full Migration Manual](https://www.radzen.com/blog/testing-angular-webpack-mocha/)
