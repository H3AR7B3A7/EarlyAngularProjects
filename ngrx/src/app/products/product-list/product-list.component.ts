import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../product'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products'

  @Input() errorMessage: string
  @Input() products: Product[]
  @Input() selectedProduct: Product
  @Input() showProductCode: boolean

  @Output() showProductCodeChange = new EventEmitter<boolean>()
  @Output() initializeNewProduct = new EventEmitter<void>()
  @Output() productWasSelected = new EventEmitter<Product>()

  showProductCodeChanged(): void {
    this.showProductCodeChange.emit()
  }

  newProduct(): void {
    this.initializeNewProduct.emit()
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product)
  }
}
