import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurgeryComponent } from './surgery/surgery.component';

const routes: Routes = [
  { path: 'surgery', component: SurgeryComponent },
  { path: '', redirectTo: 'surgery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
