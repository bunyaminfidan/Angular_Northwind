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
  apiUrl = 'https://localhost:44332/api/products/getall';

  //sanki class içerisinde tanımlanmış değişken gibi
  //privite: ProductComponent örneği oluşturan httpClient erişemesin diye. Sadece bu classta geçerli
  constructor(private httpClient: HttpClient) {}

  //Observable:
  //subscribe:Observable<ProductResponseModel>: araştır.
  //get<ProductResponseModel>: gelen datayı ProductResponseModel modeline map edeceksin demek.
  //subscribe: abone ol

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
