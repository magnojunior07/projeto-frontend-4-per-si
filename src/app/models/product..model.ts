import IProvider from './provider.model';

export interface IProduct {
  id?: number;
  description: string;
  value: number;
  unitOfMeasurement: string;
  provider: string;
  active: boolean;
}
