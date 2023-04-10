import * as mongoose from 'mongoose';

const collectionProduct = 'listProducts';

const productSchema = new mongoose.Schema({
    timestamp: String,
	name: String,
	description: String,
	code: String,
	price: Number,
	photo: String,
	stock: Number,
});

const Model = mongoose.model(collectionProduct, productSchema);

export default Model;