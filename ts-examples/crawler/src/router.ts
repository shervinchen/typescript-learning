import { Router, Request, Response, NextFunction } from 'express'
import Analyzer from './utils/analyzer'
import Crawler from './utils/crawler'
import fs from 'fs'
import path from 'path'
import { getResponseData } from './utils/util'

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, 'please login'))
  }
}

const router = Router()

router.get('/', (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    res.send(`
      <html>
        <body>
          <a href="/showData">展示内容</a>
          <a href="/getData">爬取内容</a>
          <a href="/logout">退出</a>
        </body>
      </html>
    `)
  } else {
    res.send(`
      <html>
        <body>
          <form method="post" action="/login">
            <input type="password" name="password" />
            <button>登陆</button>
          </form>
        </body>
      </html>
    `)
  }
})

router.get('/logout', (req: BodyRequest, res: Response) => {
  if (req.session) {
    req.session.login = undefined
  }
  res.json(getResponseData(true))
})

router.post('/login', (req: BodyRequest, res: Response) => {
  const { password } = req.body
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    res.json(getResponseData(false, 'already login'))
  } else {
    if (password === '123' && req.session) {
      req.session.login = true
      res.json(getResponseData(true))
    } else {
      res.json(getResponseData(false, 'login Fail!'))
    }
  }
})

router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
  const secret = 'x3b174jsx'
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
  const analyzer = Analyzer.getInstance()
  new Crawler(url, analyzer)
  res.json(getResponseData(true))
})

router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname, '../data/course.json')
    const result = fs.readFileSync(position, 'utf-8')
    res.json(getResponseData(JSON.parse(result)))
  } catch (error) {
    res.json(getResponseData(false, 'no crawler data'))
  }
})

export default router