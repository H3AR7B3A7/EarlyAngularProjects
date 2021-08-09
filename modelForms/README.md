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

---

Date of creation: 7-10-2021
