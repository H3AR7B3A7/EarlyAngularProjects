import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  title: string = 'Product List!'
  imageHeight: number = 50
  imageMargin: number = 2
  showImage: boolean = false
  filter: string = ''

  products: any[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://www.sneeboer.com/wp-content/uploads/2021/04/8715093060450-1.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://ak1.ostkcdn.com/images/products/is/images/direct/71e707ebc1b09d03f0971d2e8640f9b731967dfc/2-Tire-Wheelbarrow-Garden-Cart-Heavy-duty-Dolly-Utility-Cart.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

}
