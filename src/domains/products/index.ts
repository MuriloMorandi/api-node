import { Router } from 'express'
import { adaptRoute } from '../../adapts/adaptRoute';
import { makeGetByIdProductsController, makeGetProductsController, makeRegisterProductsController, makeUpdateProductsController } from './factories/productsFactory';
import { validateResource } from '../../middleware/validation';
import { registerProductsDTO } from './validations/registerProductsDTO';
import { makeTokenMiddleware } from '../../middleware/tokenMiddleware';
import { adaptMiddleware } from '../../adapts/adaptMiddleware';

const ProductsRoutes = Router();

ProductsRoutes.post('/',
    adaptMiddleware(makeTokenMiddleware()),
    validateResource(registerProductsDTO),
    adaptRoute(makeRegisterProductsController())
);

ProductsRoutes.get('/',
    adaptMiddleware(makeTokenMiddleware()),
    adaptRoute(makeGetProductsController())
);

ProductsRoutes.get('/:id',    
    adaptMiddleware(makeTokenMiddleware()),
    adaptRoute(makeGetByIdProductsController())
);

ProductsRoutes.put('/:id',
    adaptMiddleware(makeTokenMiddleware()), adaptRoute(makeUpdateProductsController())
);

export {ProductsRoutes};