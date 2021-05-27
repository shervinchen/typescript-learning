import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { controller, use, get } from '../decorator';
import { getResponseData } from '../utils/util';
import Analyzer from '../utils/analyzer';
import Crawler from '../utils/crawler';

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : false);
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, 'please login'));
  }
};

@controller('/api')
export class CrawlerController {
  @get('/getData')
  @use(checkLogin)
  getData(req: BodyRequest, res: Response): void {
    const secret = 'x3b174jsx';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = Analyzer.getInstance();
    new Crawler(url, analyzer);
    res.json(getResponseData(true));
  }

  @get('/showData')
  @use(checkLogin)
  showData(req: BodyRequest, res: Response): void {
    try {
      const position = path.resolve(__dirname, '../../data/course.json');
      const result = fs.readFileSync(position, 'utf-8');
      res.json(getResponseData(JSON.parse(result)));
    } catch (error) {
      res.json(getResponseData(false, 'no crawler data'));
    }
  }
}