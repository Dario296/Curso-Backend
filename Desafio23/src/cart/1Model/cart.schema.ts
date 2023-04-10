import * as mongoose from 'mongoose';

const collectionCart = 'listCart';

const schemaCart = new mongoose.Schema({
	author: {
		name: String,
		lastName: String,
		address: String,
		phoneNumber: Number,
		username: String,
	},
	productos: [],
	timestamp: String,
});

const Model = mongoose.model(collectionCart, schemaCart);

export default Model;