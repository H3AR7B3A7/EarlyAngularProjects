import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { DeveloperState } from './developer.state'

const initialState: DeveloperState = {
    developers: []
}

// TODO : Add payload to the actions
export const developerReducer = createReducer<DeveloperState>(
    initialState,
    on(createAction('[Developer] Add'), (state): DeveloperState => {
        return {
            ...state,
            developers: [...state.developers, { id: Math.random(), name: 'New Developer', team: 'New Team' }]
        }
    }),
    on(createAction('[Developer] Remove'), (state): DeveloperState => {
        const newDevelopers = state.developers.slice(1)
        return {
            ...state,
            developers: newDevelopers
        }
    })
)

const getDeveloperState = createFeatureSelector<DeveloperState>('developers')

export const getDevelopers = createSelector(getDeveloperState, (state: DeveloperState) => state.developers)