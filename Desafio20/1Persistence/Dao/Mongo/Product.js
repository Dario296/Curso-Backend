import logger from '../../../0Config/Logger.js';
import connectMongo from '../../../0Config/ConnectMongo.js';
import Model from '../../../1Models/Produc.js';
import Dto from '../../Dto/Product.js';

connectMongo();

class Persistence {
	async init() {
		logger.info('products dao en mongodb -> listo!');
	}

	async disconnect() {
		logger.info('products dao en mongodb -> cerrado!');
	}
	
	async add(data) {
		try {
			const dataAdd = new Model(data);
			const add = await dataAdd.save(dataAdd);
			return Dto(add);
		} catch (err) {
			logger.error('Error al guardar el producto ' + err);
		}
	}

	async get(name) {
		try {
			if (name) {
				const data = await Model.find({ name: name });
				return Dto(data);
			} else {
				const data = await Model.find();
				return Dto(data);
			}
		} catch (err) {
			logger.error('Error al burcar los productos ' + err);
		}
	}
	async getId(id) {
		try {
			const data = await Model.findById(id);
			return Dto(data);
		} catch (err) {
			logger.error('Error al burcar los productos ' + err);
		}
	}

	async update(id, data) {
		try {
			const update = await Model.findByIdAndUpdate(id, data);
			return Dto(update);
		} catch (err) {
			logger.error('Error al burcar y actualizar los productos ' + err);
		}
	}

	async delete(id) {
		try {
			const deelete = await Model.deleteOne({ _id: id });
			return Dto(deelete);
		} catch (err) {
			logger.error('Error al burcar y eliminar los productos ' + err);
		}
	}
}

export default new Persistence();
