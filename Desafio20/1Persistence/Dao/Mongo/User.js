import logger from '../../../0Config/Logger.js';
import connectMongo from '../../../0Config/ConnectMongo.js';
import Model from '../../../1Models/User.js';
import Dto from '../../Dto/User.js';

connectMongo();

class Persistence {
	async init() {
		logger.info('products dao en mongodb -> listo!');
	}

	async disconnect() {
		logger.info('products dao en mongodb -> cerrado!');
	}

	async get(data) {
		try {
			const user = await Model.findOne({ username: data });
			return Dto(user);
		} catch (err) {
			logger.error('Error al burcar un usuario ' + err);
		}
	}

	async add(data) {
		try {
			const dataAdd = new Model(data);
			const add = await dataAdd.save();
			return Dto(add);
		} catch (err) {
			logger.error('Error al guardar el usaurio ' + err);
		}
	}
}

export default new Persistence();
