import { Component } from '@angular/core';

export interface IProduct {
  description: string;
  value: number;
  unitOfMeasurement: string;
  provider: string;
  active: boolean;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  product: IProduct = {
    description: '',
    value: 0,
    unitOfMeasurement: '',
    provider: '',
    active: false,
  };

  onSubmit(): void {
    console.log(this.product);
  }
}
