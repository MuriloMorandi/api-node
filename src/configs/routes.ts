import express, {Express} from 'express'
import {ProductsRoutes} from '../domains/products'
import { HomeRoutes } from '../domains/home';

const routes = (app: Express) => {
  app.use(
    express.json()
  );

  app.use("/", HomeRoutes)
  
}

export default routes;