import { IProduct } from "../../interfaces/IProducts";
import { IProductsRepository } from "../ProductsRepository";

export class MockerProductsRepository implements IProductsRepository{
    dataMocker: IProduct[] =  [
            {
                id: 1,
                name: 'Product 1',
                price: 10
            },
            {
                id: 2,
                name: 'Product 2',
                price: 20
            }
    ]

    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async save(data: IProduct): Promise<IProduct> {
        data.id = this.dataMocker.length + 1;
        this.dataMocker.push(data)
        return data;
    }

    async getAll(): Promise<IProduct[]> {
        return this.dataMocker;
    }

    async getById(id: number): Promise<IProduct> {
        return {
            id: 1,
            name: 'Product 1',
            price: 10
        };
    }

    async update(id:number, data: IProduct): Promise<IProduct> {
        return {
            id: 1,
            name: 'Product 1',
            price: 10
        };
    }

}