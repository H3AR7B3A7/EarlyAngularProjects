# Getting Started With Angular
[Official Angular Pages](https://angular.io/)

Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.

### Installation
- **Install NPM & Node.js**: Download installer [here](https://nodejs.org/en/download/).
- **Install Typescript**: npm install -g typescript
- **Install Angular**: npm install -g @angular/cli

### VSC Extensions:
- Angular Essentials
- Angular Language service
- Angular Snippets
- Nx Console
- TSLint
- Material Icon Theme

## Creating a Project
Navigate to the desired folder and use following commands:
>ng n <name>
>ng serve

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
Most of the time Typescript is able to figure out what type a variable is supposed to hold through *Type Inference*. Even when we did not clearly state a variables type, TypeScript will not transpile if we assign it the wrong type of variable.

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

Notice that we had to check for the true type of the param of *any* type.

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

But arrow functions also allows lexical scoping of *this*:

    function delayedGreeting(name): void {
        this.name = name;
        this.greet = function(){
            setTimeout(() =>
            console.log('Hello ' + this.name), 0);
        }
    }

If we were to use the actual function instead of the arrow function this.name would be *Undefined*.

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
Object that includes only *part* of an interface:

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

*Note to check nullable values before using them!*
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
>ng generate component <name>

Example component decorator:

    @Component({
        selector: 'app-hero',
        templateUrl: './hero.component.html',
        styleUrls: ['./hero.component.css']
    })

To render the template of the new component we add the selector to *app.component.html*:

    <app-hero></app-hero>

### Binding Components in Templates
See *'testProject'* for examples of:
- Variable Binding
- Class Binding
- Style Binding
- Event Binding
- Input Binding
- Output Binding







## Testing
Common commands:
>ng test  
>npm test  
>ng test --watch false  
>npm test --watch false  
>ng test --code-coverage  
>ng test --karma-config karma.conf.js --watch false

To always get code coverage, edit *angular.json*:

    "test": {
        "options": {
            "codeCoverage": true
        }
    }

To run tests on *Edge* browser:
>npm install karma-edge-launcher --save-dev

To run tests on *FireFox* browser:
>npm install karma-firefox-launcher --save-dev

And edit *karma.conf.js*:

    plugins: [ 
        require('karma-edge-launcher'),
        require('karma-firefox-launcher')
     ]
    ...
    browsers: ['Chrome','Edge','Firefox']

Or don't edit browsers array and run individually:
>ng test --browsers Edge  
>ng test --browsers Firefox

## Testing with Other Frameworks

### Jest
[Full Manual Guide](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/)

Automated migration:
>ng add @briebug/jest-schematic

Common commands:
>ng test  
>npm test  
>ng test --coverage  
>npx jest --coverage  
>ng test --watch  
>npx jest --watch  
>ng test --watchAll  
>npx jest --watchAll

### Mocha
[Full Manual Guide](https://www.radzen.com/blog/testing-angular-webpack-mocha/)