"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logger_1 = require("./logger");
const MONGO = process.env.MONGO;
const connectMongo = async () => {
    try {
        mongoose_1.default.set('strictQuery', false);
        mongoose_1.default.connect(MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger_1.default.info('MongoDb Connected');
    }
    catch (error) {
        logger_1.default.error('Error connecting to database', error);
    }
};
exports.default = connectMongo;
//# sourceMappingURL=connectMongo.js.map