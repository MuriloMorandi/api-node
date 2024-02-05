import { ProductDTO } from '../DTOs/productDTO';
import { InternalServerError } from "../../../exceptions/InternalServerError";
import { IProductsRepository } from "../../../repositories/ProductsRepository";
import { IProductsParams } from "../validations/registerProductsDTO";

export class WriteProductsUseCase {
    constructor(private readonly productsRepository: IProductsRepository) { }

    async Create(data: IProductsParams) {
        const ret = await this.productsRepository.save(data);
        
        return new ProductDTO(ret);       
    }

    async Update(id:number, data: IProductsParams) { 

        const ret = await this.productsRepository.update(id, data);

        return new ProductDTO(ret);
    }
}