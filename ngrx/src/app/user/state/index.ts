import { UserState } from './user.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
    users: UserState
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUsername = createSelector(getUserFeatureState, state => state.maskUsername)

export const getCurrentUser = createSelector(getUserFeatureState, state => state.currentUser)
