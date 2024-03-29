import { DBProductsRepository } from '../../../repositories/database/DBProductsRepository';
import { DeleteProductsController } from "../controllers/deleteProductsController";
import { GetByIdProductsController } from "../controllers/getByIdProductsController";
import { GetProductsController } from "../controllers/getProductsController";
import { RegisterProductsController } from "../controllers/registerProductsController";
import { UpdateProductsController } from "../controllers/updateProductsController";
import { DeleteProductsUseCase } from "../useCases/deleteProductsUseCases";
import { ReadProductsUseCase } from "../useCases/readProductsUseCases";
import { WriteProductsUseCase } from "../useCases/writeProductsUseCases";


export const makeRegisterProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const registerProductsUseCase = new WriteProductsUseCase(productsRepository);
    const registerProductsController = new RegisterProductsController(registerProductsUseCase);

    return registerProductsController;
}

export const makeGetProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const getProductsUseCase = new ReadProductsUseCase(productsRepository);
    const getProductsController = new GetProductsController(getProductsUseCase);

    return getProductsController;
}

export const makeGetByIdProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const getProductsUseCase = new ReadProductsUseCase(productsRepository);
    const getByIdProductsController = new GetByIdProductsController(getProductsUseCase);

    return getByIdProductsController;
}

export const makeUpdateProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const updateProductsUseCase = new WriteProductsUseCase(productsRepository);
    const updateProductsController = new UpdateProductsController(updateProductsUseCase);

    return updateProductsController;
}

export const makeDeleteProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const deleteProductsUseCase = new DeleteProductsUseCase(productsRepository);
    const deleteProductsController = new DeleteProductsController(deleteProductsUseCase);

    return deleteProductsController;
}