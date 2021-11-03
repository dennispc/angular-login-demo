import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from './product-list.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getProducts() : Observable<ProductList>{
    return this._httpClient.get<ProductList>('https://localhost:5001/api/products');
  }
}
