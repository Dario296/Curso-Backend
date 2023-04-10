"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const logger_1 = require("../../Config/logger");
const product_schema_1 = require("../1Model/product.schema");
const connectMongo_1 = require("../../Config/connectMongo");
(0, connectMongo_1.default)();
class ProductService {
    async get() {
        try {
            const data = await product_schema_1.default.find({});
            return data;
        }
        catch (error) {
            logger_1.default.error(`error al buscar products: ${error}`);
        }
        ;
    }
    ;
    async getName(name) {
        try {
            const data = await product_schema_1.default.find({ name: name });
            return data;
        }
        catch (error) {
            logger_1.default.error(`error al buscar producto: ${error}`);
        }
    }
    async getById(id) {
        try {
            const data = await product_schema_1.default.findById(id);
            return data;
        }
        catch (error) {
            logger_1.default.error(`error al buscar producto: ${error}`);
        }
        ;
    }
    ;
    async create(product) {
        try {
            const newData = {
                timestamp: Date.now(),
                name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
                description: product.description,
                code: product.code,
                price: product.price,
                photo: product.photo,
                stock: product.stock,
            };
            const addData = new product_schema_1.default(newData);
            const dataAdd = await product_schema_1.default.create(addData);
            return dataAdd;
        }
        catch (error) {
            logger_1.default.error(`error al crear producto: ${error}`);
        }
        ;
    }
    ;
    async update(id, product) {
        try {
            const newData = {
                timestamp: Date.now(),
                name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
                description: product.description,
                code: product.code,
                price: product.price,
                photo: product.photo,
                stock: product.stock,
            };
            const updateData = await product_schema_1.default.findByIdAndUpdate(id, newData);
            return updateData;
        }
        catch (error) {
            logger_1.default.error(`error al crear producto: ${error}`);
        }
        ;
    }
    ;
    async delete(id) {
        try {
            const dataDelete = product_schema_1.default.findByIdAndDelete(id);
            return dataDelete;
        }
        catch (error) {
            logger_1.default.error(`error al crear producto: ${error}`);
        }
        ;
    }
    ;
}
exports.ProductService = ProductService;
;
//# sourceMappingURL=product.service.js.map