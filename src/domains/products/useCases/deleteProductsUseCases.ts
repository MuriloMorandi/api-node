import { ProductsRepository } from './../../../repositories/ProductsRepository';

export class DeleteProductsUseCase{
    constructor(private readonly productsRepository: ProductsRepository) { }

    async Delete(id:number) {
        return await this.productsRepository.delete(id);
    }
}