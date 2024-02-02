import sql from '../configs/db';
import { InternalServerError } from '../exceptions/InternalServerError';
import { NotFoundException } from '../exceptions/NotFoundException';
import { IProduct } from '../interfaces/IProducts';

export interface IProductsRepository{
    save: (data: IProduct) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
    getById(id: number): Promise<IProduct>;
    update(id:number, data: IProduct): Promise<IProduct>;
}


export class ProductsRepository implements IProductsRepository{

    async save(data: IProduct): Promise<IProduct> {
        try
        {
            const { name, price } = data;

            const ret = await sql`
                INSERT INTO products (name, price)
                VALUES (${name}, ${price})
                RETURNING *
            `;

            return {
                id: ret[0].id,
                name: ret[0].name,
                price: ret[0].price
                }
            }
        catch (err)
        {
            throw new InternalServerError('Error to save product');
        }
    }

    async getAll(): Promise<IProduct[]> {
        
        const ret = await sql`
            SELECT id, INITCAP(name) as name, price FROM products
            order by id
        `;

        return ret.map((product: any) => ({
            id: product.id,
            name: product.name,
            price: product.price
        }));

    }

    async getById(id: number): Promise<IProduct> {
        const ret = await sql`
            SELECT id, INITCAP(name) as name, price FROM products WHERE id = ${id}
        `;
        
        if (!ret.length)
        {
            throw new NotFoundException('Product not found');
        }

        return {
            id: ret[0].id,
            name: ret[0].name,
            price: ret[0].price
        }

    }

    async update(id: number, data: IProduct): Promise<IProduct> {
        try
        {
            await this.getById(id);

            const ret = await sql`
                UPDATE products SET
                    name = ${data.name},
                    price = ${data.price}
                WHERE id = ${id}
                RETURNING *
            `;

            return {
                id: ret[0].id,
                name: ret[0].name,
                price: ret[0].price
                }
            }
        catch (err)
        {
            if (err instanceof NotFoundException)
            {
                throw err;
            }
            
            throw new InternalServerError('Error to update product');
        }
    }


}