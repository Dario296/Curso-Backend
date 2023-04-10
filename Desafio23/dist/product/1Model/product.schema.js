"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const collectionProduct = 'listProducts';
const productSchema = new mongoose.Schema({
    timestamp: String,
    name: String,
    description: String,
    code: String,
    price: Number,
    photo: String,
    stock: Number,
});
const Model = mongoose.model(collectionProduct, productSchema);
exports.default = Model;
//# sourceMappingURL=product.schema.js.map