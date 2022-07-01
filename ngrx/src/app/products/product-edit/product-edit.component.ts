import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { Product } from '../product'
import { GenericValidator } from '../../shared/generic-validator'
import { NumberValidators } from '../../shared/number.validator'
import { Store } from '@ngrx/store'
import { getCurrentProduct, State } from '../state'
import * as ProductActions from '../state/product.actions'

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit'
  errorMessage = ''
  productForm: FormGroup

  displayMessage: { [key: string]: string } = {}
  private validationMessages: { [key: string]: { [key: string]: string } }
  private genericValidator: GenericValidator
  product$: Observable<Product | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<State>) {
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessages)
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      description: ''
    })
    this.product$ = this.store.select(getCurrentProduct).pipe(
      tap(product => this.displayProduct(product))
    )

    this.productForm.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.productForm)
    )
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.productForm)
  }

  displayProduct(product: Product | null): void {
    if (product) {
      this.productForm.reset()

      if (product.id === 0) {
        this.pageTitle = 'Add Product'
      } else {
        this.pageTitle = `Edit Product: ${product.productName}`
      }

      this.productForm.patchValue({
        productName: product.productName,
        productCode: product.productCode,
        starRating: product.starRating,
        description: product.description
      })
    }
  }

  cancelEdit(product: Product): void {
    this.displayProduct(product)
  }

  deleteProduct(product: Product): void {
    if (product && product.id) {
      if (confirm(`Really delete the product: ${product.productName}?`)) {
        this.store.dispatch(ProductActions.deleteProduct({ productId: product.id }))
      }
    } else {
      this.store.dispatch(ProductActions.clearCurrentProduct())
    }
  }

  saveProduct(originalProduct: Product): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const product = { ...originalProduct, ...this.productForm.value }

        if (product.id === 0) {
          this.store.dispatch(ProductActions.createProduct({ product }))
        } else {
          this.store.dispatch(ProductActions.updateProduct({ product }))
        }
      }
    }
  }
}
