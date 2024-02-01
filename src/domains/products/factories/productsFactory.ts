import { DBProductsRepository } from "../../../repositories/IProductsRepository";
import { GetByIdProductsController } from "../controllers/getByIdProductsController";
import { GetProductsController } from "../controllers/getProductsController";
import { RegisterProductsController } from "../controllers/registerProductsController";
import { UpdateProductsController } from "../controllers/updateProductsController";
import { GetProductsUseCase } from "../useCases/readProductsUseCases";
import { WriteProductsUseCase } from "../useCases/writeProductsUseCases";


export const makeRegisterProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const registerProductsUseCase = new WriteProductsUseCase(productsRepository);
    const registerProductsController = new RegisterProductsController(registerProductsUseCase);

    return registerProductsController;
}

export const makeGetProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const getProductsUseCase = new GetProductsUseCase(productsRepository);
    const getProductsController = new GetProductsController(getProductsUseCase);

    return getProductsController;
}

export const makeGetByIdProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const getProductsUseCase = new GetProductsUseCase(productsRepository);
    const getByIdProductsController = new GetByIdProductsController(getProductsUseCase);

    return getByIdProductsController;
}

export const makeUpdateProductsController = () => {
    const productsRepository = new DBProductsRepository();
    const updateProductsUseCase = new WriteProductsUseCase(productsRepository);
    const updateProductsController = new UpdateProductsController(updateProductsUseCase);

    return updateProductsController;
}