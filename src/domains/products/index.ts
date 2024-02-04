import { Router } from 'express'
import { adaptRoute } from '../../adapts/adaptRoute';
import {
    makeDeleteProductsController,
    makeGetByIdProductsController,
    makeGetProductsController,
    makeRegisterProductsController,
    makeUpdateProductsController
} from './factories/productsFactory';

import { validateResource } from '../../middleware/validation';
import { ProductsDTO } from './validations/registerProductsDTO';
import { makeTokenMiddleware } from '../../middleware/tokenMiddleware';
import { adaptMiddleware } from '../../adapts/adaptMiddleware';

const ProductsRoutes = Router();

ProductsRoutes.post('/',
    adaptMiddleware(makeTokenMiddleware()),
    validateResource(ProductsDTO),
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
    adaptMiddleware(makeTokenMiddleware()),
    validateResource(ProductsDTO),
    adaptRoute(makeUpdateProductsController())
);

ProductsRoutes.delete('/:id',
    adaptMiddleware(makeTokenMiddleware()),
    adaptRoute(makeDeleteProductsController())
);

export {ProductsRoutes};