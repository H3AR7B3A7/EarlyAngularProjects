import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule) },
  { path: '**', redirectTo: 'contacts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
