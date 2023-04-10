"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const logger_1 = require("../../Config/logger");
const user_schema_1 = require("../1Model/user.schema");
const connectMongo_1 = require("../../Config/connectMongo");
(0, connectMongo_1.default)();
class UsersService {
    async get(data) {
        try {
            const user = await user_schema_1.default.findOne({ username: data });
            return user;
        }
        catch (error) {
            logger_1.default.error(`error al buscar user: ${error}`);
        }
        ;
    }
    ;
    async create(data) {
        try {
            const dataAdd = new user_schema_1.default(data);
            const add = await dataAdd.save();
            return add;
        }
        catch (error) {
            logger_1.default.error(`error al crear user: ${error}`);
        }
        ;
    }
    ;
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map