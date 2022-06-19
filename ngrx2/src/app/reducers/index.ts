import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import { environment } from 'src/environments/environment'

import * as fromDevelopers from '../developers/reducers/developer.reducer';

export interface State {
  developers: fromDevelopers.State
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
