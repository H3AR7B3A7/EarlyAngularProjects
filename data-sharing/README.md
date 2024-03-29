# Data Sharing

We often need to share data within our application. Here we will go over multiple ways to do so in different situation.

## Communication Within Component

### One-Way Data Binding

Through interpolation we can display variables from out component.ts file in our template.

In some.component.ts:

```
title = 'My Title'
```

Template:

```
{{ title }}
```

Or we can use variable from our component in our elements:

In some.component.ts:

```
myBoolean
```

Template:

```
<element [boundProperty]="myBoolean">My Title</element>
```

### Event Binding

We can also bind our elements to functions through events to affect the component in the other direction. We can find out what elements there are [here](https://www.w3schools.com/jsref/dom_obj_event.asp).

In some.component.ts:

```
someFunction(): void {
  // Do something...
}
```

Template:

```
<element (event)="someFunction()">
```

### Two way data binding

When we are using inputs we can bind our data in two direction using the FormControl. We shouldn't forget to import FormsModule first though!

In some.component.ts:

```
name = ''
```

Template:

```
<input [(ngModel)]="name">
```

We can find more on two-way data binding [here](https://angular.io/guide/two-way-binding).

## Communication Between Components

### Parent to Child with Input

In parent.component.ts:

```
someValue = "Data passed to child"
```

Parent template:

```
<app-child [someInput]="someValue"></app-child>
```

In child.component.ts:

```
@Input someInput : any
```

### Parent to Child with Template Variables

In parent template:

```
<app-child #someTemplateVariable></app-child>
<element (click)="someTemplateVariable.someFunction("New value")">Click Me</element>
```

In child.component.ts:

```
someFunction(value: string) : void {
  // Do something...
}
```

_We don't need to bind to functions, we can bind to variables in the child component in exactly the same way._

### Child to Parent with ViewChild

In parent.component.ts:

```
export class AppComponent implements AfterViewInit {
  value = 'My Value';

  @ViewChild(SecondChildComponent) someChild!: any

  ngAfterViewInit(): void {
    this.value = this.someChild.someValue
  }
```

In child.component.ts:

```
someValue = 'New Value'
```

_This value is only read 'AfterViewInit'. The parent would need some sort of event to update the value when it gets changed in the child component._

### Child to Parent with EventEmitter Output

In child.component.ts:

```
@Output() someEvent = new EventEmitter

someFunction(): void {
  this.someEvent.emit('Some data...')
}
```

In parent template:

```
<app-child (someEvent)="handleSomeEvent($event)"></app-child>
```

In parent.component.ts:

```
handleSomeEvent(event: any): void {
  // Do something
}
```

### Child to Parent over a Router Outlet

We can use the onActivate method to get a reference to the component that gets loaded into the router-outlet.

In child.component.ts:

```typescript

@Output() deleteEvent = new EventEmitter
@Output() addEvent = new EventEmitter

deleteItem(id){
    this.deleteEvent.emit(id)
}
  addItem(data) {
    this.deleteEvent.emit(data)
}

```

In the parent template:

```html
<router-outlet (activate)="onActivate($event)"></router-outlet>
```

In parent.component.ts:

```typescript
onActivate(componentReference) {
   componentReference.deleteEvent.subscribe((id) => {
      // implementation
   });

   componentReference.addEvent.subscribe((data) => {
      // implementation
   })
}
```

### Unrelated Components with a Service

We can also use a data service bound to root to share data between unrelated components.

In service:

```
private sharedValue = new BehaviorSubject('')
currentSharedValue = this.sharedValue.asObservable()

changeSharedValue(newValue: string) {
  this.sharedValue.next(newValue)
}
```

Component changing data:

```
constructor(
  private dataService: DataService
) { }

changeSharedData(): void {
  this.dataService.changeSharedValue('New Shared Data')
}
```

Component reading shared data:

```
value = 'Old Value'
subscription!: Subscription;

constructor(
  private dataService: DataService
) { }

ngOnInit() {
  this.subscription = this.dataService.currentSharedValue.subscribe(newValue => {
    this.value = newValue
  })
}

ngOnDestroy() {
  this.subscription.unsubscribe()
}
```

### More Examples

We can find more examples [here](https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/).

---

Date of creation: 7-4-2021
