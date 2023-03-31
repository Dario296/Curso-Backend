import logger from '../../../0Config/Logger.js';
import connectMongo from '../../../0Config/ConnectMongo.js';
import Model from '../../../1Models/Cart.js';

connectMongo();

class Persistence {
    async init() {
		logger.info('products dao en mongodb -> listo!');
	}

	async disconnect() {
		logger.info('products dao en mongodb -> cerrado!');
	}

	async addCart(data) {
		try {
			const dataAdd = new Model(data);
			const cartAdd = await dataAdd.save();
			return cartAdd;
		} catch (err) {
			logger.error('Error al guardar el carrito ' + err);
		}
	}

	async getCart(correo) {
		try {
			const cart = await Model.findOne({ 'author.username': correo });
			return cart;
		} catch (err) {
			logger.error('Error al buscar el carrito ' + err);
		}
	}

	async updateCart(correo, data) {
		try {
			const producUpdate = await Model.updateOne({ 'author.username': correo }, data);
			return producUpdate;
		} catch (err) {
			logger.error('Error al buscar el carrito y actualizar ' + err);
		}
	}

	async deleteCart(correo) {
		try {
			const producDelete = await Model.deleteOne({ 'author.username': correo });
			return producDelete;
		} catch (error) {
			logger.error('Error al borrar el carrito ' + err);
		}
	}
}

export default new Persistence();