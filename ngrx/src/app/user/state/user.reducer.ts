import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { User } from '../user'

import * as AppState from '../../state/app.state'
import * as UserActions from './user.actions'

export interface State extends AppState.State {
  users: UserState
}
export interface UserState {
  maskUsername: boolean,
  currentUser: User,
}

const initialState: UserState = {
  maskUsername: false,
  currentUser: null
}

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUsername, (state): UserState => {
    return {
      ...state,
      maskUsername: !state.maskUsername
    }
  })
)

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUsername = createSelector(getUserFeatureState, state => state.maskUsername)

export const getCurrentUser = createSelector(getUserFeatureState, state => state.currentUser)
