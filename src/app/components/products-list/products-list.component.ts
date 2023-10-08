import { products } from 'src/app/shared/products.list';
import { IProduct } from './../../models/product..model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productsList: IProduct[] = products;

  ngOnInit() {
    this.productsList = products;
  }
}
