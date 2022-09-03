import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksModule } from './tasks/tasks.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { InboxScreenComponent } from './inbox/inbox-screen/inbox-screen.component';

@NgModule({
  declarations: [AppComponent, InboxComponent, InboxScreenComponent],
  imports: [
    BrowserModule,
    TasksModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
