import { Action } from '@ngrx/store'

export const ADD_DEVELOPER = '[Developer] Add'
export const REMOVE_DEVELOPER = '[Developer] Remove'

export class AddDeveloper implements Action {
    readonly type = ADD_DEVELOPER
}

export class RemoveDeveloper implements Action {
    readonly type = REMOVE_DEVELOPER
}

export type Actions = AddDeveloper | RemoveDeveloper;