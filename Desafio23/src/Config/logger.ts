import pino from 'pino';

function buildDefaultLogger() {
	const defaultLogger = pino();
	defaultLogger.level = 'info';
	return defaultLogger;
}

function buildProdLogger() {
    const transport = pino.transport({
        target: 'pino-file',
        options: {
            filename: 'logs/app.log',
        }

    })
	const prodLogger = pino(transport);
	prodLogger.level = 'warn';
	return prodLogger;
}

let Logger = buildDefaultLogger();

if (process.env.NODE_ENV == 'prod') {
	Logger = buildProdLogger();
}

export default Logger;