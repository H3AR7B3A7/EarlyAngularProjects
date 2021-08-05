import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule } from '@angular/router'
import { WelcomeComponent } from './home/welcome.component'
import { PageNotFoundComponent } from './page-not-found.component'
import { SelectiveStrategy } from './selective-strategy.service'
import { AuthGuard } from './user/auth.guard'

const ROUTES = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    // canLoad: [AuthGuard],
    data: { preload: true },
    loadChildren: () =>
      import('./products/product.module').then(m => m.ProductModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: true,
      preloadingStrategy: SelectiveStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
