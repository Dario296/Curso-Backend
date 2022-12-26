import admin  from "firebase-admin";
import fs from "fs"

const serviceAccount = JSON.parse(fs.readFileSync("../config/cursobackend32190-firebase-adminsdk-uqxia-f1827e4b15.json"))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

const query = db.collection("carrito")

export class carrito {

    async getCarrito() {
        const coll = await query.get()
        coll.forEach( doc => {
            console.log(doc.data());
            return doc.data()
        })
    }

    async getCarritoById(id) {
        const coll = await query.doc(id).get()
        console.log(coll.data());
        return coll.data()
    }

    async getProductosCarrito(id) {
        const cart = await query.doc(id).get()
        const listProducts = cart.data().productos
        console.log(listProducts);
        return listProducts
    }

    async postCarrito(){
        const newcarrito = await query.add({timistamp: Date.now(), productos: []})
        return newcarrito
    }

    async postProductoCarrito(idCarrito, producto){
        const cart = await query.doc(idCarrito).get()
        const listProducts = cart.data().productos
        listProducts.push(producto)
        await query.doc(idCarrito).update({productos: listProducts})
    }

    async deleteProductoCarrito(idCarrito, idProducto){
        const cart = await query.doc(idCarrito).get()
        const listProducts = cart.data().productos
        listProducts.push(producto)
        await query.doc(idCarrito).update({productos: listProducts})
    }

    async deleteCarrito(id){
        await query.doc(id).delete()
    }
}

const cart = new carrito

// cart.getCarrito()
// cart.getCarritoById("b0aRqE2vOKwq2HSyn2H7")
// cart.getProductosCarrito("b0aRqE2vOKwq2HSyn2H7")
// cart.postCarrito()
// cart.postProductoCarrito("b0aRqE2vOKwq2HSyn2H7", {id:5, saludo: "hola", curso: "coder", despido: "chau"})