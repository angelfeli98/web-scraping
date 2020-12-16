"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var ws_1 = __importDefault(require("./routes/ws"));
require('./config/config');
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.configurateServe = function () {
            _this.server.use(cors_1.default());
            _this.server.use(body_parser_1.default.json());
            _this.server.use(body_parser_1.default.urlencoded({ extended: true }));
            _this.server.use('/ws', ws_1.default);
        };
        this.runServer = function () {
            _this.server.listen(_this.port, function () { return console.log("Server ready at http://localhost:" + _this.port + "/ws/clima"); });
        };
        this.port = process.env.PORT;
        this.server = express_1.default();
        this.configurateServe();
        this.runServer();
    }
    return Server;
}());
exports.default = Server;
