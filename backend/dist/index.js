"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bd_1 = __importDefault(require("./bd"));
const app = (0, express_1.default)();
const port = 3003;
const getUsers = app.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield bd_1.default.query("select * from USUARIO");
    console.log("users : ", users);
    response.json({ info: "Node.js, Express, and Postgres API" });
}));
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
