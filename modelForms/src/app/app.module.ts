import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  { path: 'advanced', component: AdvancedFormComponent },
  { path: '', component: SimpleFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AdvancedFormComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
