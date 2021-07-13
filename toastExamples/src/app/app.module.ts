import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Toast, ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PinkToast } from './custom-toasts/pink.toast';

@NgModule({
  declarations: [
    AppComponent,
    PinkToast
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: PinkToast, // Toast = default
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  entryComponents: [PinkToast],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
