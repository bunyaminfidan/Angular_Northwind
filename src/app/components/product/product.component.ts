import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
//OnInıt : ngOnInit implemente edilir. Component ilk kez açıldığından çalışan kod.
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //get<ProductResponseModel>: gelen datayı ProductResponseModel modeline map edeceksin demek.
    //subscribe: abone ol
    //Observable: subscribe abone olabilirsin demek. async çalışır. bundan dolayı abone oluyoruz.
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
