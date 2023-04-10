"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const collectionCart = 'listCart';
const schemaCart = new mongoose.Schema({
    author: {
        name: String,
        lastName: String,
        address: String,
        phoneNumber: Number,
        username: String,
    },
    productos: [],
    timestamp: String,
});
const Model = mongoose.model(collectionCart, schemaCart);
exports.default = Model;
//# sourceMappingURL=cart.schema.js.map