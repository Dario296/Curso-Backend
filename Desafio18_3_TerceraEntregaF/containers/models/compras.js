import mongoose from 'mongoose';

const collectionCompras = 'compras';

const schemaCompras = new mongoose.Schema({
	// author: {
	// 	name: { type: String, require: true },
	// 	lastName: { type: String, require: true },
	// 	address: { type: String, require: true },
	// 	phoneNumber: { type: Number, require: true },
	// 	username: { type: String, require: true },
	// },
	// productos: [],
	// timestamp: String,
	compra: Object
});

const modelCompras = mongoose.model(collectionCompras, schemaCompras);

export default modelCompras;
