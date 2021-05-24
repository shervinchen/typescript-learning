import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import 'reflect-metadata'
import './controller/LoginController'
import './controller/CrawlerController'
import router from './router'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
  name: 'session',
  keys: ['csd'],
  maxAge: 24 * 60 * 60 * 1000
}))
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'csd'
  next()
})
app.use(router)

app.listen(7001, () => {
  console.log('server is running')
})