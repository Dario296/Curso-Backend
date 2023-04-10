"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const logger_1 = require("../../Config/logger");
const cart_schema_1 = require("../1Model/cart.schema");
const connectMongo_1 = require("../../Config/connectMongo");
(0, connectMongo_1.default)();
class CartService {
    async get(correo) {
        try {
            const data = await cart_schema_1.default.findOne({ 'author.username': correo });
            return data;
        }
        catch (error) {
            logger_1.default.error(`error al buscar el carrito: ${error}`);
        }
        ;
    }
    ;
    async add(usuario) {
        try {
            const addData = {
                author: {
                    name: usuario.name,
                    lastName: usuario.lastName,
                    address: usuario.address,
                    phoneNumber: usuario.phoneNumber,
                    username: usuario.username,
                },
                productos: [],
                timestamp: Date.now(),
            };
            const dataAdd = new cart_schema_1.default(addData);
            const add = await cart_schema_1.default.create(dataAdd);
            return add;
        }
        catch (error) {
            logger_1.default.error(`error al agregar el carrito: ${error}`);
        }
        ;
    }
    ;
    async update(correo, data) {
        try {
            const updateData = {
                data
            };
            const dataAdd = new cart_schema_1.default(updateData);
            const add = await cart_schema_1.default.findOneAndUpdate({ 'author.username': correo }, dataAdd);
            return add;
        }
        catch (error) {
            logger_1.default.error(`error al actualizar el carrito: ${error}`);
        }
        ;
    }
    ;
    async postProduct(correo, data) {
        try {
            const addData = this.update(correo, { $push: { productos: data } });
            return addData;
        }
        catch (error) {
            logger_1.default.error(`error al agregar el producto al carrito: ${error}`);
        }
        ;
    }
    ;
    async deleteProduct(correo, data) {
        try {
            const deleteData = this.update(correo, { $pull: { productos: data } });
            return deleteData;
        }
        catch (error) {
            logger_1.default.error(`error al eliminar el producto al carrito: ${error}`);
        }
        ;
    }
    ;
    async delete(correo) {
        try {
            const deleteData = await cart_schema_1.default.deleteOne({ 'author.username': correo });
            return deleteData;
        }
        catch (error) {
            logger_1.default.error(`error al eliminar el carrito: ${error}`);
        }
        ;
    }
    ;
}
exports.CartService = CartService;
;
//# sourceMappingURL=cart.service.js.map