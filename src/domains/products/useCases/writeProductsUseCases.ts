import { ProductDTO } from '../DTOs/productDTO';
import { InternalServerError } from "../../../exceptions/InternalServerError";
import { IProduct } from "../../../interfaces/IProducts";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { IRegisterProductsDTO } from "../validations/registerProductsDTO";

export class WriteProductsUseCase {
    constructor(private readonly productsRepository: IProductsRepository) { }

    async Create(data: IRegisterProductsDTO) {
        
        if (data.name == undefined || data.name == '')
        {
            throw new InternalServerError('Name is required');    
        }
        const ret = await this.productsRepository.save(data);
        
        return new ProductDTO(ret);       
    }

    async Update(id:number, data: IProduct) { 

        const ret = await this.productsRepository.update(id, data);

        return new ProductDTO(ret);
    }
}