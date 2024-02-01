import { Router } from 'express'
import { adaptRoute } from '../../adapts/adaptRoute';
import { makeGetByIdProductsController, makeGetProductsController, makeRegisterProductsController, makeUpdateProductsController } from './factories/productsFactory';
import { validateResource } from '../../middleware/validation';
import { registerProductsDTO } from './validations/registerProductsDTO';

const ProductsRoutes = Router();

ProductsRoutes.post('/', validateResource(registerProductsDTO),adaptRoute(makeRegisterProductsController()));
ProductsRoutes.get('/', adaptRoute(makeGetProductsController()));
ProductsRoutes.get('/:id', adaptRoute(makeGetByIdProductsController()));
ProductsRoutes.put('/:id', adaptRoute(makeUpdateProductsController()));

export {ProductsRoutes};