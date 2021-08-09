# Template Forms

Template forms, while easy to use, are not testable in our unit tests.

## Why Template Forms

- Easy to create / read when the form isn't too complex
  - We only need data model
  - A form model is generated for us from html

## Characteristics

- Generated form model
- HTML validation
- Two-way data binding

## Directives

- ngForm
- ngModel
- ngModelGroup

Example:

```
<form (ngSubmit)="save()" #signUpForm="ngForm">
  <input id="firstNameId" type=text" [(ngModel)]="customer.firstName" name="firstName" #firstNameVar="ngModel">
  <button type="submit" [disabled]="!signUpForm.valid">
    Save
  </button>
</form>
```

The form tag automatically creates a FormGroup.
The input tag automatically creates a FormControl.

_We can use template reference variables (#) to access form model and form control states._

## Used Libraries

- Bootstrap

  > ng add @ng-bootstrap/ng-bootstrap

- NGX Bootstrap

  - Buttons

    > ng add ngx-bootstrap --component buttons

  - Date Picker

    > ng add ngx-bootstrap --component datepicker

  - Time Picker

    > ng add ngx-bootstrap --component timepicker

  - Rating

    > ng add ngx-bootstrap --component rating

_The --component parameter is not working for Angular 11+._

## Pipedream

Pipedream is a production-scale serverless platform to connect APIs, remarkably fast.

- Connect OAuth and key-based API accounts in seconds.
- Use connected accounts in Node.js code steps or no-code building blocks.
- Build and run workflows triggered on HTTP requests, schedules, app events and more.

We can find pipedream [here](https://pipedream.com/)

---

Date of creation: 6-28-2021
