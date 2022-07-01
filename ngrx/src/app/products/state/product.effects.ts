import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { ProductService } from "../product.service";
import * as ProductActions from "./product.actions";

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    effectName$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.productService.getProducts().pipe(
                map(products => ProductActions.loadProductsSuccess({ products })),
                catchError(error => of(ProductActions.loadProductsFail({ error })))
            )));
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            concatMap(action => this.productService.updateProduct(action.product).pipe(
                map(product => ProductActions.updateProductSuccess({ product })),
                catchError(error => of(ProductActions.updateProductFail({ error })))
            )))
    });
}
