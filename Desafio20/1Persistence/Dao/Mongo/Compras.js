import logger from '../../../0Config/Logger.js';
import Model from '../../../1Models/compras.js';
import connectMongo from '../../../0Config/ConnectMongo.js';

connectMongo();

class Persistence {
    async init() {
		logger.info('products dao en mongodb -> listo!');
	}

	async disconnect() {
		logger.info('products dao en mongodb -> cerrado!');
	}

	async addCompras(data) {
		try {
			const dataAdd = new Model(data);
			const comprasAdd = await dataAdd.save();
			return comprasAdd;
		} catch (err) {
			logger.error('Error al propcesar su compra ' + err);
		}
	}
}

export default new Persistence();