import logger from '../../../0Config/Logger.js';
import connectMongo from '../../../0Config/ConnectMongo.js';
import Model from '../../../1Models/Chat.js';

connectMongo();

class Persistence {
    async init() {
		logger.info('products dao en mongodb -> listo!');
	}

	async disconnect() {
		logger.info('products dao en mongodb -> cerrado!');
	}

	async getChat() {
		try {
			const data = await Model.find({}, { _id: 0, __v: 0 });
			return data;
		} catch (err) {
			logger.error('Error al burcar los mensajes ' + err);
		}
	}

	async addChat(data) {
		try {
			const dataAdd = new Model(data);
			const add = await dataAdd.save();
			return add;
		} catch (error) {
			logger.error('Error al guardar el mensaje ' + err);
		}
	}
}

export default new Persistence();