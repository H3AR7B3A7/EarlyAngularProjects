import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core.routing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDatabase } from './fake-database/fake-database.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDatabase, {
      delay: 2000
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  exports: [
    BrowserModule,
    CoreRoutingModule,
    NavBarComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
