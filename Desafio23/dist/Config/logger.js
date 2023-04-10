"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = require("pino");
function buildDefaultLogger() {
    const defaultLogger = (0, pino_1.default)();
    defaultLogger.level = 'info';
    return defaultLogger;
}
function buildProdLogger() {
    const transport = pino_1.default.transport({
        target: 'pino-file',
        options: {
            filename: 'logs/app.log',
        }
    });
    const prodLogger = (0, pino_1.default)(transport);
    prodLogger.level = 'warn';
    return prodLogger;
}
let Logger = buildDefaultLogger();
if (process.env.NODE_ENV == 'prod') {
    Logger = buildProdLogger();
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map