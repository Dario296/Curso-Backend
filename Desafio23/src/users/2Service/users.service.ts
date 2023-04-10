import Logger from '../../Config/logger';
import Model from '../1Model/user.schema';
import connectMongo from '../../Config/connectMongo';

connectMongo();

export class UsersService {

    async get (data) {
        try {
            const user = await Model.findOne({username: data})
            return user;
        } catch (error) {
            Logger.error(`error al buscar user: ${error}`);
        };
    };

    async create (data) {
        try {
            const dataAdd = new Model(data)
            const add = await dataAdd.save();
            return add;
        } catch (error) {
            Logger.error(`error al crear user: ${error}`);
        };
    };
    
}
