import { createAction, createReducer, on } from '@ngrx/store'

export const developerReducer = createReducer(
    {},
    on(createAction('[Developer] Something'), state => {
        return {
            ...state,
        }
    })
)
