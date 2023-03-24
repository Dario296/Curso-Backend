// import Persistence from '../1Persistence/Persistence.js';
import Models from '../1Models/compras.js';
import productsDaoFactory from '../1Persistence/factory.js';
const Persistence = productsDaoFactory.getDao()

async function postCompras(Compra) {
	const result = await Persistence.add(Models, Compra);
	return result;
}

export default postCompras;
