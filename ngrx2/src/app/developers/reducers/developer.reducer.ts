import { Developer } from '../developer.model'

import * as AppState from '../../reducers/app.state'
import { createAction, createFeatureSelector, createReducer, on } from '@ngrx/store'
export interface State extends AppState.State {
    developers: DeveloperState
}

export interface DeveloperState {
    developers: Developer[]
}

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


export const getDevelopers = createFeatureSelector<DeveloperState>('developers')
