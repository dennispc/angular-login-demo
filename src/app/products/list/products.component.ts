import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  $products: Observable<Product[]> | undefined;

  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
    this.$products = this._productsService.getProducts();
  }

}
