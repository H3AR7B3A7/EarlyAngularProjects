import { createAction, createReducer, on } from '@ngrx/store'

export const userReducer = createReducer(
  { maskUsername: true },
  on(createAction('[User] Toggle Username Mask'), state => {
    console.log('original state:' + JSON.stringify(state))
    return {
      ...state,
      maskUsername: !state.maskUsername
    }
  })
)
