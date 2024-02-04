import { ProductsRepository } from "../../../repositories/ProductsRepository";
import { DeleteProductsController } from "../controllers/deleteProductsController";
import { GetByIdProductsController } from "../controllers/getByIdProductsController";
import { GetProductsController } from "../controllers/getProductsController";
import { RegisterProductsController } from "../controllers/registerProductsController";
import { UpdateProductsController } from "../controllers/updateProductsController";
import { DeleteProductsUseCase } from "../useCases/deleteProductsUseCases";
import { GetProductsUseCase } from "../useCases/readProductsUseCases";
import { WriteProductsUseCase } from "../useCases/writeProductsUseCases";


export const makeRegisterProductsController = () => {
    const productsRepository = new ProductsRepository();
    const registerProductsUseCase = new WriteProductsUseCase(productsRepository);
    const registerProductsController = new RegisterProductsController(registerProductsUseCase);

    return registerProductsController;
}

export const makeGetProductsController = () => {
    const productsRepository = new ProductsRepository();
    const getProductsUseCase = new GetProductsUseCase(productsRepository);
    const getProductsController = new GetProductsController(getProductsUseCase);

    return getProductsController;
}

export const makeGetByIdProductsController = () => {
    const productsRepository = new ProductsRepository();
    const getProductsUseCase = new GetProductsUseCase(productsRepository);
    const getByIdProductsController = new GetByIdProductsController(getProductsUseCase);

    return getByIdProductsController;
}

export const makeUpdateProductsController = () => {
    const productsRepository = new ProductsRepository();
    const updateProductsUseCase = new WriteProductsUseCase(productsRepository);
    const updateProductsController = new UpdateProductsController(updateProductsUseCase);

    return updateProductsController;
}

export const makeDeleteProductsController = () => {
    const productsRepository = new ProductsRepository();
    const deleteProductsUseCase = new DeleteProductsUseCase(productsRepository);
    const deleteProductsController = new DeleteProductsController(deleteProductsUseCase);

    return deleteProductsController;
}