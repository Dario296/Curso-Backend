import mongoose, { ConnectOptions } from 'mongoose';
import logger from './logger';

const MONGO = process.env.MONGO;

const connectMongo = async () => {
	try {
		mongoose.set('strictQuery', false);
		mongoose.connect(MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions);
		logger.info('MongoDb Connected');
	} catch (error) {
		logger.error('Error connecting to database', error);
	}
};

export default connectMongo;