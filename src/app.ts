
import express from 'express';
import routes from './configs/routes';
import { ErrorHandling } from './middleware/errorHandling';

const app = express();
routes(app);
app.use(ErrorHandling)

module.exports = app;