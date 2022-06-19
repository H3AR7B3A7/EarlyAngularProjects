import { Developer } from '../developer.model'
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
    developers: DeveloperState
}

export interface DeveloperState {
    developers: Developer[]
}