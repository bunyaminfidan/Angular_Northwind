import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

//Injectable: enjekte edilecek servis
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44332/api/';

  //sanki class içerisinde tanımlanmış değişken gibi
  //privite: ProductComponent örneği oluşturan httpClient erişemesin diye. Sadece bu classta geçerli
  constructor(private httpClient: HttpClient) {}

  //Observable:
  //subscribe:Observable<ProductResponseModel>: araştır.
  //get<ProductResponseModel>: gelen datayı ProductResponseModel modeline map edeceksin demek.
  //subscribe: abone ol

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getbycategory?id=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
