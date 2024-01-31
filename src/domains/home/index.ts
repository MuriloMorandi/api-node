import express from 'express';
import { adaptRoute } from '../../adapts/adaptRoute';
import { makeHomeController } from './factories/homeFactory';



const HomeRoutes = express.Router();

HomeRoutes.get('/', adaptRoute(makeHomeController()));

export { HomeRoutes };