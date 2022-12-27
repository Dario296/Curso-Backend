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

    // constructor() {
    //     this.db = mongoose.connect();
    // }

    // async get(collection, id) {
    //     if (!id) {
    //         const query = await this.db.collection(collection).find();
    //         const docs = query.docs;
    //         const response = docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //         return response;
    //     }
    //     const doc = await this.db.collection(collection).find({id: id});
    //     const response = { id: doc.id, ...doc.data() };
    //     return response;
    // }

    // async add(collection, data) {

    //     await this.db.collection(collection).save(data);
    //     const response = { id, ...data };
    //     return response;

    // }

    // async update(collection, id, data) {
    //     await this.db.collection(collection).doc(id).update(data);
    //     const response = { id, ...data };
    //     return response;
    // }

    // async delete(collection, id, idProduct) {

    //     if (idProduct) {
    //         const doc = await this.db.collection(collection).doc(id).get();
    //         const data = doc.data();
    //         const productos = data.productos.filter(producto => producto.id !== idProduct);
    //         await this.db.collection(collection).doc(id).update({ productos });
    //         return { id };
    //     }

    //     await this.db.collection(collection).doc(id).delete();
    //     return { id };
    // }

    async add(data){
        const dataAdd = new modelsProducts(data)
        await dataAdd.save()
    }

}


const Pr = new MongoContainer

Pr.add({timestamp: "23545654",nombre: "juan",descripcion: "String",codigo: "asgd565",precio: 100,foto: "String",stock: 10,})

module.exports = MongoContainer;