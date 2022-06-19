import { createAction, createReducer, on } from '@ngrx/store'

export const productReducer = createReducer(
    {},
    on(createAction('[Product] Something'), state => {
        return {
            ...state,
        }
    })
)
