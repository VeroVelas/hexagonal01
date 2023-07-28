"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const cors_1 = __importDefault(require("cors"));
const LoadRouter_1 = require("./event/LoadRouter");
const ProductRouter_1 = require("./product/infrastructure/ProductRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/products", ProductRouter_1.productRouter);
app.use("/load", LoadRouter_1.loadRouter);
app.listen(3003, () => {
    signale.success("Server online in port 3003");
});
