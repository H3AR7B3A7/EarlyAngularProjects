import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, SimpleFormComponent, AdvancedFormComponent } from '../app/index';
import { AboutOrImageValidator } from './advanced-form/validate-about-or-image.directive';

const routes: Routes = [
  { path: 'advanced', component: AdvancedFormComponent },
  { path: '', component: SimpleFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AdvancedFormComponent,
    SimpleFormComponent,
    AboutOrImageValidator
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
