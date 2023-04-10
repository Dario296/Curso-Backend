import Logger from '../../Config/logger';
import Model from '../1Model/product.schema';
import connectMongo from '../../Config/connectMongo';

connectMongo();

export class ProductService {

    async get () {
        try {
            const data = await Model.find({});
            return data;
        } catch (error) {
            Logger.error(`error al buscar products: ${error}`);
        };
    };
    
    async getName (name) {
        try {
            const data = await Model.find({name: name});
            return data;
        } catch (error) {
            Logger.error(`error al buscar producto: ${error}`);            
        }
    }

    async getById (id) {
        try {
            const data = await Model.findById(id);
            return data;
        } catch (error) {
            Logger.error(`error al buscar producto: ${error}`);
        };
    };

    async create (product) {
        try {
            const newData = {
                timestamp: Date.now(),
                name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
                description: product.description,
                code: product.code,
                price: product.price,
                photo: product.photo,
                stock: product.stock,
            };
            const addData = new Model(newData);
            const dataAdd = await Model.create(addData);
            return dataAdd;
        } catch (error) {
            Logger.error(`error al crear producto: ${error}`);
        };
    };

    async update (id, product) {
        try {
            const newData = {
                timestamp: Date.now(),
                name: product.name.toLowerCase().charAt(0).toUpperCase() + product.name.slice(1),
                description: product.description,
                code: product.code,
                price: product.price,
                photo: product.photo,
                stock: product.stock,
            };
            const updateData = await Model.findByIdAndUpdate(id, newData);
            return updateData;
        } catch (error) {
            Logger.error(`error al crear producto: ${error}`);
        };
    };

    async delete (id) {
        try {
            const dataDelete = Model.findByIdAndDelete(id);
            return dataDelete;
        } catch (error) {
            Logger.error(`error al crear producto: ${error}`);            
        };
    };
};