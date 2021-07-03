# Style Management

## Commands Used

```
ng n styleManagment --style scss --routing --inline-template

ng add @angular-eslint/schematics
```

## Style Management

We can include paths for angular to look for our stylesheets in angular.json.
Here is an example:

```
"options": {
  ...
  "styles": [
    "src/styles.scss"
  ],
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/default-styles"
    ]
  },
  "scripts": []
},
```

This way we do not have to include the path when importing a stylesheet.

---

Date of creation: 7-3-2021
