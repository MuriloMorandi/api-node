import express from 'express';
import routes from './configs/routes';
import { ErrorHandling } from './middleware/errorHandling';
import { logResponseTime } from './middleware/logResponseTime';

const app = express();

if (process.env.ENV === 'development')
{
    app.use(logResponseTime);
}

routes(app);
app.use(ErrorHandling)

export { app } 