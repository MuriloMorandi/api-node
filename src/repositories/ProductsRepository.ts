import { IProduct } from '../interfaces/IProducts';

export interface IProductsRepository{
    save: (data: IProduct) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
    getById(id: number): Promise<IProduct>;
    update(id: number, data: IProduct): Promise<IProduct>;
    delete(id: number): Promise<void>;
}


