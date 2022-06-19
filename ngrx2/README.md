# Ngrx

## Used Commands

yarn install angular-in-memory-web-api
ng add @ngrx/store@latest --no-minimal
ng add @angular-eslint/schematics@latest
ng add @cypress/schematic@latest
ng g m core
ng g m shared
ng g c home
ng g m developers
ng g c developers
ng g m products
ng g c products
ng g c core/nav-bar

## Info

- Redux + RxJS
- Single source of truth
- Immutable Data
- Provides consistency across teams
- Diagnostic tool to watch store
- Flow: Component -> Actions -> ( Effects -> Server -> Effects -> Actions -> )
  Reducers -> State in Store -> Selectors -> Component
- A lot of code

```cmd
ng add @ngrx/store@latest --no-minimal --statePath core/reducers
```

@ngrx/effect
@ngrx/entity
@ngrx/store
@ngrx/store-devtools
