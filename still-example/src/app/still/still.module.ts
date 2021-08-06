import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StillComponent } from './still.component';



@NgModule({
  declarations: [
    StillComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'still',
        component: StillComponent,
        outlet: 'still'
      }
    ])
  ]
})
export class StillModule { }
