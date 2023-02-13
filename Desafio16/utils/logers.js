import pino from 'pino';

function buildDefaultLogger() {
  const consoLogger = pino();
  consoLogger.level = 'info';
  return consoLogger;
}

function buildProdLogger() {
  const warnLogger = pino('warn.log');
  warnLogger.level = 'warn';
  const errorLogger = pino('error.log');
  errorLogger.level = 'error';
  return warnLogger, errorLogger;
}

let logger = buildDefaultLogger();
if (process.env.NODE_ENV == 'prod') {
  logger = buildProdLogger();
}

export default logger;
