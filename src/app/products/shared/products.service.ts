import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getProducts() : Observable<Product[]>{
    return this._httpClient.get<Product[]>('https://localhost:5001/api/products');
  }
}
