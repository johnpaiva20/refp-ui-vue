import { ProductType } from './ProductType';

export class Product {
    id: number;
    description: string;
    type: ProductType = new ProductType();
}