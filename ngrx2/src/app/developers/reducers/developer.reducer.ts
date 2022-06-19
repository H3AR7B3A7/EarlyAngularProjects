import { Developer } from './developer.model'
import * as developers from '../actions/developer.action';

export interface State {
    developers: Developer[]
}

const initialState: State = {
    developers: []
}

export function reducer(state = initialState, action: developers.Actions): State {
    switch (action.type) {
        case developers.ADD_DEVELOPER:
            return {
                ...state,
                developers: [...state.developers, { id: 9, name: 'me', team: 'seeks' }]
            };

        case developers.REMOVE_DEVELOPER:
            const newDevelopers = { ...state.developers }
            newDevelopers.pop()
            return {
                ...state,
                developers: [...newDevelopers]
            };

        default:
            return state;
    }
}

export const getDevelopers = (state: State) => state.developers
