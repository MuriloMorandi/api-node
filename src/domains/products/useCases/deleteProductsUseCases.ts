import { DBProductsRepository } from '../../../repositories/database/DBProductsRepository';

export class DeleteProductsUseCase{
    constructor(private readonly productsRepository: DBProductsRepository) { }

    async Delete(id:number) {
        return await this.productsRepository.delete(id);
    }
}