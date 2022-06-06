import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'one',
    loadComponent: () => import('./one/one.component').then(x => x.OneComponent),
    children: [
      { 
        path: 'two',
        loadComponent: () => import('./one/two/two.component').then(x => x.TwoComponent)
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
