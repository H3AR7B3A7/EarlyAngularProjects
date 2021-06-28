import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StarsComponent } from './stars.component'
import { FormsModule } from '@angular/forms'
import { RatingModule } from 'ng-starrating'

@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarsComponent,
    RatingModule
  ]
})
export class SharedModule { }
