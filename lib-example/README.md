# Lib Example

## Commands

> ng new [project-name]

> ng g library [library-name]

> ng build [library-name]

## Contributing a Lib to NPM

[Official documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

We can create an account on npm [here](https://www.npmjs.com/signup).

Log in to npm:

> npm adduser

> npm login

> cd dist/[library-name]

Make sure to have a unique name / version for the library in package.json

> npm publish --access=public

## Remove a Lib from NPM

> unpublish [library-name] --force

*Force is only required to delete it entirely.*

## To use the library in your project

> npm install [library-name]

---

Date of creation: 5-29-2022
