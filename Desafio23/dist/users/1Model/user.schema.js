"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const collectionUser = 'listUsers';
const schemaUser = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    address: { type: String, require: true },
    age: { type: Number, require: true },
    phoneNumber: { type: Number, require: true },
    photo: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    admin: Boolean,
});
const Model = mongoose.model(collectionUser, schemaUser);
exports.default = Model;
//# sourceMappingURL=user.schema.js.map