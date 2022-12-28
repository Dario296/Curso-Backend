const mongoose = require('mongoose');
const modelsProducts = require('../../models/modelsProduct')
const cartModels = require('../../models/modelsCart')

mongoose.connect("mongodb+srv://coderhouse:coderhouse@cluster0.detnzhp.mongodb.net/ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB Connected');
    }
});


class MongoContainer {

    async addProducts(data){
        const dataAdd = new modelsProducts(data)
        const productoAdd = await dataAdd.save()
        console.log(productoAdd);
        return productoAdd
    }

    async addCarrito(data){
        const dataAdd = new cartModels(data)
        const carritoadd = await dataAdd.save()
        console.log(carritoadd);
        return carritoadd
    }

    async getProducts(id){
        const idProduct = id
        if (idProduct) {
            const produc = await modelsProducts.find({_id: idProduct})
            console.log(produc);
            return produc
        }
        else{
            const produc = await modelsProducts.find()
            console.log(produc);
            return produc
        }
    }

    async getCart (id){
        const idProduct = id
        if (idProduct) {
            const produc = await cartModels.find({_id: idProduct})
            console.log(produc);
            return produc
        }
        else{
            const produc = await cartModels.find()
            console.log(produc);
            return produc
        }
    }

    async updateProduct(id, data){
        const producUpdate = await modelsProducts.updateOne({_id: id}, data)
        console.log(producUpdate);
        return producUpdate
    }

    async updateCart(id, data){
        const producUpdate = await cartModels.updateOne({_id: id}, data)
        console.log(producUpdate);
        return producUpdate
    }

    async deleteProduc(id){
        const producDelete = await modelsProducts.deleteOne({_id : id})
        console.log(producDelete);
        return producDelete
    }

    async deleteCart(id){
        const producDelete = await cartModels.deleteOne({_id : id})
        console.log(producDelete);
        return producDelete
    }
}

module.exports = MongoContainer;