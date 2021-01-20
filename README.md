# Getting Started With Angular
[Official Angular Pages](https://angular.io/)
Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.

### Installation
- **Install NPM & Node.js**: Download installer [here](https://nodejs.org/en/download/).
- **Install Typescript**: npm install -g typescript
- **Install Angular**: npm install -g @angular/cli

## Creating a Project
Navigate to the desired folder and use following commands:
>ng n <name>
>ng serve

# Typescript
[Official Typescript pages](https://www.typescriptlang.org/)

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