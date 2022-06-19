import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes = [
    { path: '', component: HomeComponent },
    {
        path: 'developers',
        loadChildren: () =>
            import('../developers/developers.module').then(
                (m) => m.DevelopersModule
            ),
    },
    {
        path: 'products',
        loadChildren: () =>
            import('../products/products.module').then(
                (m) => m.ProductsModule
            ),
    },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class CoreRoutingModule { }