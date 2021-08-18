# Model Forms

Compared to template forms, model forms (or reactive forms) are testable in our unit tests.

## Why Model Forms

- Dynamically add input elements
- Watch what the user types
- Wait with validation until typing stops
- Different validation for different situations
- Immutable data structures

_Trying to implement these scenarios in a template form might prove difficult and will result in lengthy and hard to maintain html files._

## Characteristics

- Manually created form model
- Validation in component class
- Managing data flow ourselves (no two-way data binding)

## Directives

- formGroup
- formControl
- formControlName
- formGroupName
- formArrayName

Compared to with template forms, we need to create the form model ourselves in the component class.

## Set / Patch Value

We use setValue to set every value in the FormGroup.

```
this.customerForm.setValue({
  firstName: 'Jack',
  lastName: 'Harkness',
  email: 'jack@torchwood.com'
})
```

We use patchValue to set a subset of the values in a FormGroup.

```
this.customerForm.patchValue({
  firstName: 'Jack',
  lastName: 'Harkness'
})
```

## Validation

We can add an array with validators as a second parameter, and an array with asynchronous validators as a third parameter.

```
this.customerForm = this.fb.group({
  firstName: ['', [Validators.required], []],
})
```

Asynchronous validators are only called when all synchronous validators pass validation.

---

Date of creation: 7-10-2021

## Observing Changes

FormControls and FormGroups have a valueChanges (/statusChanges) property that returns an observable.

By watching these changes we can:

- Adjust validation rules
- Handle validation messages
- Modify user interface elements
- Provide automatic suggestions
- ...

## Reactive Transformations

- **debounceTime**:  
  Ignore events un till specified time has passed without another event.
- **throttleTime**:  
  Emits a value, then ignores subsequent values for a specified amount of time.
- **distinctUntilChanged**:  
  Suppresses duplicate consecutive items.
- ...

## Dynamically Duplicate Inputs

- Define the input element(s)
- Define a FormGroup if needed
- Refactor to make copies
- Create a FormArray
- Loop through the FormArray
- Duplicate the input element(s)
