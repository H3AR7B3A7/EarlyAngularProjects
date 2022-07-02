import { createReducer, on } from '@ngrx/store'
import { User } from '../user'

import * as UserActions from './user.actions'

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
