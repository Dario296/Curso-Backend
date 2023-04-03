import Persistence from '../1Persistence/Persistence.js';
import Models from '../1Models/User.js';
import bCrypt from 'bcrypt';

function createHash(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

async function getUser(Correo) {
	const result = await Persistence.getUsername(Models, Correo);
	return result;
}

async function postUser(data, url,) {
	const newUser = {
		name: data.name,
		lastName: data.lastName,
		address: data.address,
		age: data.age,
		phoneNumber: data.phoneNumber,
		photo: url,
		username: data.username,
		password: createHash(data.password),
		// admin: true,
	};
	const result = await Persistence.add(Models, newUser);
	return result;
}

export default { getUser, postUser };
