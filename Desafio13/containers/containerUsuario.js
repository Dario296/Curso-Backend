import mongoose from "mongoose";
import modelsUsuario from "../models/modelsUsuario.js";

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://coderhouse:coderhouse@cluster0.detnzhp.mongodb.net/ecommerce1?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MongoDB Connected");
    }
});

export default class Container {

    async getUsuario(data){
        const usuario = await modelsUsuario.findOne({username: data});
        return usuario;
    };

    async addUsuario(data){
        const dataAdd = new modelsUsuario(data);
        const add = await dataAdd.save();
        return add;
    };
    
}