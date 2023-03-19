"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./router/router");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(router_1.router);
//.then(() => {
app.listen(process.env.PORT || 5080, () => {
    console.log("VOCE ESTA CONECTADO EM http://localhost:5080/");
});
//})
//.catch((error) => console.log("Erro ao conectar o servidor!", error.message));
