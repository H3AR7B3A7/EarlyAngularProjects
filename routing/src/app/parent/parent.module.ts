import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { MoreContentComponent } from './more-content/more-content.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'content', component: ContentComponent },
      { path: 'more-content', component: MoreContentComponent }
    ]
  },
]

@NgModule({
  declarations: [
    ParentComponent,
    ContentComponent,
    MoreContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentModule { }
