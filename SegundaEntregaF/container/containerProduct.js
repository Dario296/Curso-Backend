import admin  from "firebase-admin";
import fs from "fs"

const serviceAccount = JSON.parse(fs.readFileSync("../config/cursobackend32190-firebase-adminsdk-uqxia-f1827e4b15.json"))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

const query = db.collection("productos")

export class producto {

    async getProducto() {
        const coll = await query.get()
        coll.forEach( doc => {return doc.data()})
    }

    async getProductoById(id) {
        const coll = await query.doc(id).get()
        coll.forEach( doc => {return doc.data()})
    }

    async postProducto(objeto){
        await query.add({timistamp: Date.now(), ...objeto})
        return objeto
    }

    async updateProducto(id, objeto){
        await query.doc(id).update(objeto)
    }

    async deleteProducto(id){
        await query.doc(id).delete()
    }
}