import superagent from 'superagent'
import fs from 'fs'
import path from 'path'

import DellAnalyzer from './dellAnalyzer'

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

class Crawler {
  private filePath = path.resolve(__dirname, '../data/course.json')

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess()
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFile(fileContent)
  }

  async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }
}

const secret = 'x3b174jsx'
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`

const analyzer = new DellAnalyzer()
new Crawler(url, analyzer)