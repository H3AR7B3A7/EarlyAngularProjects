import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = 'Product List!'
  imageHeight: number = 50
  imageMargin: number = 2
  showImage: boolean = false
  selectedRating: string = ''

  private _filter: string = ''

  get filter(): string {
    return this._filter
  }

  set filter(value: string) {
    this._filter = value
    console.log('In setter: ', value)
    this.filteredProducts = this.performFilter(value)
  }

  products: Product[] = []

  filteredProducts: Product[] = []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.filteredProducts = this.products
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  performFilter(value: string): Product[] {
    value = value.toLowerCase()
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(value))
  }

  onRatingClicked(message: string): void {
    this.selectedRating = message
    setTimeout(() => { this.selectedRating = '' }, 3000)
  }
}
