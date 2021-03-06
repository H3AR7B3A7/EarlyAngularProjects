import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  title: string = 'Product List!'
  imageHeight: number = 50
  imageMargin: number = 2
  showImage: boolean = false
  selectedRating: string = ''
  errorMessage: string = ''
  sub!: Subscription;

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
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = this.products
      },
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
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
