import { NgModule } from '@angular/core'

import { DevelopersComponent } from './developers.component'
import { SharedModule } from '../shared/shared.module'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { developerReducer } from './state/developer.reducer'

const developerRoutes: Routes = [
  { path: '', component: DevelopersComponent }
]

@NgModule({
  declarations: [
    DevelopersComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(developerRoutes),
    StoreModule.forFeature('developers', developerReducer)
  ]
})
export class DevelopersModule { }
