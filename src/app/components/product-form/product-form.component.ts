import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product..model';
import IProvider from 'src/app/models/provider.model';
import { providers } from 'src/app/shared/prodivers.list';
import { products } from 'src/app/shared/products.list';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  providersList: IProvider[] = providers;

  product: IProduct = {
    description: '',
    value: 0,
    unitOfMeasurement: '',
    stockQuantity: 0,
    provider: '',
    active: false,
  };

  onSubmit(): void {
    this.product.id = products.length + 1;
    products.push(this.product);
    localStorage.setItem('productsList', JSON.stringify(products));

    this.product = {
      id: products.length + 1,
      description: '',
      value: 0,
      unitOfMeasurement: '',
      stockQuantity: 0,
      provider: '',
      active: false,
    };
  }
}
