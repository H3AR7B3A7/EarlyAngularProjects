# Ngrx

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
