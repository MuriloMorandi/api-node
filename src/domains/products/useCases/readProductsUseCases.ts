import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { ProductDTO } from "../DTOs/productDTO";


export class GetProductsUseCase {
    constructor(private readonly productsRepository: IProductsRepository) { }

    async Get() {
        
        const ret = await this.productsRepository.getAll();
        
        return ret.map((product) => new ProductDTO(product));
    }

    async GetById(id: number) {
        
        const ret = await this.productsRepository.getById(id);
        
        return new ProductDTO(ret);
    }

}