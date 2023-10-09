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
    console.log(this.productsList);
  }

  clearAllProductsList(): void {
    localStorage.removeItem('productsList');
    this.productsList = [];
    window.location.reload();
  }

  deleteItem(id: any): void {
    const index = this.productsList.findIndex((product) => product.id === id);
    console.log(index);

    if (index !== -1) {
      // Remove o item do array.
      this.productsList.splice(index, 1);

      localStorage.setItem('productsList', JSON.stringify(this.productsList));
    }
  }
}
