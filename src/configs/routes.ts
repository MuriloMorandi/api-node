import express, {Express} from 'express'

import { AuthRoutes } from '../domains/auth';
import { HomeRoutes } from '../domains/home';
import { ProductsRoutes } from '../domains/products'

const routes = (app: Express) => {
  app.use(
    express.json()
  );

  app.use("/auth", AuthRoutes);
  app.use("/", HomeRoutes)
  app.use("/products", ProductsRoutes);
}

export default routes;