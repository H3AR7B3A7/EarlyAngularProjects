import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'flexbox', loadChildren: () => import('./flexbox-example/flexbox-example.module').then(m => m.FlexboxExampleModule)},
  { path: '**', redirectTo: 'flexbox'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
