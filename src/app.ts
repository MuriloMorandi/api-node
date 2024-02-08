import express from 'express'

import routes from './configs/routes'
import { ErrorHandling } from './middleware/errorHandling'

import { setupMiddleware } from './configs/middleware'
const app = express()

setupMiddleware(app)
routes(app)
app.use(ErrorHandling)

export { app }
