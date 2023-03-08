import logger from '../Config/logger.js';
import modelUser from './models/User.js';
import connectMongo from '../Config/connectMongo.js';

connectMongo();
export default class containerUser {
	async get(data) {
		try {
			const user = await modelUser.findOne({ username: data });
			return user;
		} catch (err) {
			logger.error('Error al burcar un usuario ' + err);
		}
	}

	async add(data) {
		try {
			const dataAdd = new modelUser(data);
			const add = await dataAdd.save();
			return add;
		} catch (err) {
			logger.error('Error al guardar el usaurio ' + err);
		}
	}
}
