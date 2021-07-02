import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, Routes } from '@angular/router';
import { MoreContentComponent } from './more-content/more-content.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
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
    RouterModule.forRoot(routes)
  ]
})
export class ParentModule { }
