"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var crawler_1 = __importDefault(require("./utils/crawler"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = require("./utils/util");
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, 'please login'));
    }
};
var router = express_1.Router();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.send("\n      <html>\n        <body>\n          <a href=\"/showData\">\u5C55\u793A\u5185\u5BB9</a>\n          <a href=\"/getData\">\u722C\u53D6\u5185\u5BB9</a>\n          <a href=\"/logout\">\u9000\u51FA</a>\n        </body>\n      </html>\n    ");
    }
    else {
        res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <input type=\"password\" name=\"password\" />\n            <button>\u767B\u9646</button>\n          </form>\n        </body>\n      </html>\n    ");
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(util_1.getResponseData(true));
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : undefined;
    if (isLogin) {
        res.json(util_1.getResponseData(false, 'already login'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(util_1.getResponseData(true));
        }
        else {
            res.json(util_1.getResponseData(false, 'login Fail!'));
        }
    }
});
router.get('/getData', checkLogin, function (req, res) {
    var secret = 'x3b174jsx';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyzer = analyzer_1.default.getInstance();
    new crawler_1.default(url, analyzer);
    res.json(util_1.getResponseData(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf-8');
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (error) {
        res.json(util_1.getResponseData(false, 'no crawler data'));
    }
});
exports.default = router;
