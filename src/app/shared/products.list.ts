import { IProduct } from '../models/product..model';

let products: IProduct[] = [];

const storedProducts = localStorage.getItem('productsList');
if (storedProducts) {
  products = JSON.parse(storedProducts);
}

export { products };
