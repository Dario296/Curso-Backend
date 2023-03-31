import Persistence from '../Dao/Mongo/User.js';
import PersistenceMem from '../Dao/Mem/User.js';

const opcion = process.argv[2] || 'Mongo';

let dao;

switch (opcion) {
	case 'Mongo':
		dao = Persistence;
		await dao.init();
		break;
	case 'Mem':
		dao = PersistenceMem;
		await dao.init();
		break;
	default:
		dao = pe;
		dao.init();
}

export default class Factory {
	static getDao() {
		return dao;
	}
}
