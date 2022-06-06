import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OpeningHoursResolverService } from './about/opening-hours-resolver.service';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'content', component: ContentComponent },
      { path: 'about', component: AboutComponent, resolve: { hours: OpeningHoursResolverService } },
      { path: '**', redirectTo: 'home' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
