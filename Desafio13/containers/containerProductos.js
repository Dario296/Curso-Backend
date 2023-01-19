import mongoose from "mongoose";
import models from "../models/models.js";

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

    async add(data){
        const dataAdd = new models(data);
        const add = await dataAdd.save();
        return add;
    };

    async get(id){
        if (id) {
            const data = await models.findById(id);
            return data;
        }
        else{
            const data = await models.find();
            return data;
        }
    };

    async update(id, data){
        const update = await models.updateOne({_id: id}, data);
        return update;
    };
    
    async delete(id){
        const deelete = await models.deleteOne({_id : id});
        return deelete;
    };

};