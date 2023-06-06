import express, { Application } from 'express'
import session from 'express-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()
// App  local imports
import { verifyClient } from './middlewares/verify.client'
import { ConnectDB } from './middlewares/db.congfig'
import { CustomStrategy, localStrategy } from './modules/auth/auth.utils'
import { error, error404 } from './middlewares/error.handler'
import rootRouter from './modules/root/root.routes'
import authRoute from './modules/auth/auth.routes'
import categoryRoute from './modules/category/category.routes'
import productRoute from './modules/product/product.routes'

const app: Application = express()
app.use(express.json())
app.set('trust proxy', 1)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'some secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/sessionDB',
    }),
    cookie:
      process.env.NODE_ENV === 'production'
        ? { maxAge: 14 * 86400000, sameSite: 'none', secure: true }
        : { maxAge: 14 * 86400000, sameSite: 'strict', secure: false },
  })
)

app.use(verifyClient)
app.use(ConnectDB)
app.use(passport.initialize())
app.use(passport.session())
passport.use(localStrategy)
passport.use(CustomStrategy)
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.use('/', rootRouter)
app.use('/auth', authRoute)
app.use('/api/v1', categoryRoute)
app.use('/api/v1', productRoute)

app.use(error404, error)
export default app
