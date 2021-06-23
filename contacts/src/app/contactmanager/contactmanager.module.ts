import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactmanagerAppComponent } from './contactmanager-app.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { MainContentComponent } from './components/main-content/main-content.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { RouterModule, Routes } from '@angular/router'
import { MaterialModule } from '../shared/material.module'
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms'
import { ContactService } from './services/contact.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptorService } from './services/auth-interceptor.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    ContactService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ContactmanagerModule { }
