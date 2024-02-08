import express, { Express } from 'express'

import rateLimit from 'express-rate-limit'
import { slowDown } from 'express-slow-down'

import { logResponseTime } from '../middleware/logResponseTime'

export function setupMiddleware(app: Express) {
  if (process.env.ENV === 'development') {
    app.use(logResponseTime)
  }
  app.use(express.json())

  app.use(
    rateLimit({
      windowMs: 2 * 60 * 1000, // 2 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: {
        error: 'Too many requests, please try again later.'
      }
    })
  )

  app.use(
    slowDown({
      windowMs: 25 * 60 * 1000, // 25 minutes
      delayAfter: 50, // allow 50 requests per 15 minutes, then...
      delayMs: 1000 // begin adding 1000ms of delay per request above 50
    })
  )
}
