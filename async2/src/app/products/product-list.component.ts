import { Component, ChangeDetectionStrategy } from '@angular/core'

import { ProductService } from './product.service'
import { BehaviorSubject, combineLatest, EMPTY, Subject } from 'rxjs'
import { catchError, map, startWith } from 'rxjs/operators'
import { ProductCategoryService } from '../product-categories/product-category.service'

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Product List'
  // errorMessage = '';
  private errorMessageSubject = new Subject<string>()
  errorMessage$ = this.errorMessageSubject.asObservable()
  // selectedCategoryId;

  // private categorySelectedSubject = new Subject<number>();
  private categorySelectedSubject = new BehaviorSubject<number>(0)
  categorySelectedAction$ = this.categorySelectedSubject.asObservable()

  products$ = combineLatest([
    // this.productService.productsWithCategory$,
    this.productService.productsWithAdd$,
    this.categorySelectedAction$
    // .pipe(
    //   startWith(0)
    // )
  ])
    .pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        )),
      catchError(err => {
        // this.errorMessage = err;
        this.errorMessageSubject.next(err)
        return EMPTY
      })
    )

  categories$ = this.productCategoryService.productCategories$
    .pipe(
      catchError(err => {
        // this.errorMessage = err;
        this.errorMessageSubject.next(err)
        return EMPTY
      })
    )

  // productsSimpleFilter$ = this.productService.productsWithCategory$
  //   .pipe(
  //     map(products =>
  //       products.filter(product =>
  //         this.selectedCategoryId ? product.categoryId === this.selectedCategoryId : true
  //       ))
  //   );

  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService
  ) { }

  onAdd(): void {
    this.productService.addProduct()
  }

  onSelected(categoryId: string): void {
    // this.selectedCategoryId = +categoryId;
    this.categorySelectedSubject.next(+categoryId)
  }
}
