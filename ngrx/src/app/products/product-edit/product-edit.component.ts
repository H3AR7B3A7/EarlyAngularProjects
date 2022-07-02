import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Product } from '../product'
import { GenericValidator } from '../../shared/generic-validator'
import { NumberValidators } from '../../shared/number.validator'

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnChanges {
  pageTitle = 'Product Edit'

  @Input() errorMessage: string;
  @Input() selectedProduct: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  @Output() clearCurrent = new EventEmitter<void>();

  productForm: FormGroup

  displayMessage: { [key: string]: string } = {}
  private validationMessages: { [key: string]: { [key: string]: string } }
  private genericValidator: GenericValidator

  constructor(
    private fb: FormBuilder
  ) {
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

    this.productForm.valueChanges.subscribe(
      () => this.displayMessage = this.genericValidator.processMessages(this.productForm)
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedProduct) {
      const product = changes.selectedProduct.currentValue as Product;
      this.displayProduct(product);
    }
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
        this.delete.emit(this.selectedProduct)
      }
    } else {
      this.clearCurrent.emit()
    }
  }

  saveProduct(originalProduct: Product): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const product = { ...originalProduct, ...this.productForm.value }

        if (product.id === 0) {
          this.create.emit(product)
        } else {
          this.update.emit(product)
        }
      }
    }
  }
}
