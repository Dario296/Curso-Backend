import logger from '../Config/logger.js';
import modelChat from './models/Chat.js';
import connectMongo from '../Config/connectMongo.js';

connectMongo();
export default class containerChat {
	async getChat() {
		try {
			const data = await modelChat.find({}, { _id: 0, __v: 0 });
			return data;
		} catch (err) {
			logger.error('Error al burcar los mensajes ' + err);
		}
	}

	async addChat(data) {
		try {
			const dataAdd = new modelChat(data);
			const add = await dataAdd.save();
			return add;
		} catch (error) {
			logger.error('Error al guardar el mensaje ' + err);
		}
	}
}
