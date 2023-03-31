import Factory from '../1Persistence/Factory/Compras.js';
const Persistence = Factory.getDao()

async function postCompras(Compra) {
	const result = await Persistence.addCompras(Compra);
	return result;
}

export default postCompras;
