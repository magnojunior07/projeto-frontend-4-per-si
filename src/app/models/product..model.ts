import IProvider from './provider.model';

export interface IProduct {
  id?: number;
  description: string;
  value: number;
  unitOfMeasurement: string;
  stockQuantity: number;
  provider: string;
  active: boolean;
}
