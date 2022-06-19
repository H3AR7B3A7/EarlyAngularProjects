import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { FakeDatabase } from './fake-database/fake-database.service'
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(FakeDatabase, {
      delay: 2000
    }),
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}
