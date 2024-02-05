import { ReadProductsUseCase } from './../useCases/readProductsUseCases';

import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'
import { MockerProductsRepository } from '../../../repositories/mocker/MockerProductsRepository'
import { WriteProductsUseCase } from '../useCases/writeProductsUseCases';
import { ProductsRoutes } from '..';
import { validateResource } from '../../../middleware/validation';

describe('Products suits tests', () => {
    const productsRepository = new MockerProductsRepository();
    const readProductsUseCase = new ReadProductsUseCase(productsRepository);
    const writeProductsUseCase = new WriteProductsUseCase(productsRepository);
    
    test('GET ALL products -  should return a list of products', async () => {
        const ret = await readProductsUseCase.Get();
        expect(ret).toBeInstanceOf(Array);
    })

    test('POST products -  should return a product', async () => {
        const input = {
            name: 'Product test',
            price: 10
        }
        validateResource(input)
        const ret = await writeProductsUseCase.Create(input);
        
        expect(ret).toHaveProperty('id');
        expect(ret).toHaveProperty('name');
        expect(ret).toHaveProperty('price');
        expect(ret).toHaveProperty('priceFormat');
    })

    test.todo("GET product by id -  should return a product")
    test.todo("PUT product by id -  should return a product updated")
    test.todo("DELETE product by id -  should return a product deleted")
    test.todo("GET product by id -  should return a product not found")
    test.todo("PUT product by id -  should return a product not found")
    test.todo("DELETE product by id -  should return a product not found")
    test.todo("POST product -  should return a product with invalid name")
    test.todo("POST product -  should return a product with invalid price")
    test.todo("PUT product -  should return a product with invalid name")
    test.todo("PUT product -  should return a product with invalid price")
    test.todo("GET product by id -  should return a product with invalid id")
    test.todo("PUT product by id -  should return a product with invalid id")
    test.todo("DELETE product by id -  should return a product with invalid id")
    

})