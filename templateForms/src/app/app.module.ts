import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component'
import { CircularObjectToJsonPipe } from './user-settings-form/circular-object-to-json.pipe'
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    CircularObjectToJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
