import Logger from '../../Config/logger';
import Model from '../1Model/cart.schema';
import connectMongo from '../../Config/connectMongo';

connectMongo();

export class CartService {

    async get (correo) {
        try {
            const data = await Model.findOne({ 'author.username': correo });
            return data;
        } catch (error) {
            Logger.error(`error al buscar el carrito: ${error}`);
        };
    };

    async add (usuario) {
        try {
            const addData = {
                author: {
                    name: usuario.name,
                    lastName: usuario.lastName,
                    address: usuario.address,
                    phoneNumber: usuario.phoneNumber,
                    username: usuario.username,
                },
                productos: [],
                timestamp: Date.now(),
            };
            const dataAdd = new Model(addData);
            const add = await Model.create(dataAdd);
            return add;
        } catch (error) {
            Logger.error(`error al agregar el carrito: ${error}`);
        };
    };

    async update (correo, data) {
        try {
            const updateData = {
                data
            }
            const dataAdd = new Model(updateData);
            const add = await Model.findOneAndUpdate({ 'author.username': correo }, dataAdd);
            return add;
        } catch (error) {
            Logger.error(`error al actualizar el carrito: ${error}`);
        };
    };

    async postProduct (correo, data) {
        try {
            const addData = this.update(correo, {$push: { productos: data }});
            return addData;
        } catch (error) {
            Logger.error(`error al agregar el producto al carrito: ${error}`);
        };
    };

    async deleteProduct (correo, data) {
        try {
            const deleteData = this.update(correo, {$pull: { productos: data }});
            return deleteData;
        } catch (error) {
            Logger.error(`error al eliminar el producto al carrito: ${error}`);            
        };        
    };

    async delete (correo) {
        try {
            const deleteData = await Model.deleteOne({ 'author.username': correo })
            return deleteData;
        } catch (error) {
            Logger.error(`error al eliminar el carrito: ${error}`);
        };
    };
};