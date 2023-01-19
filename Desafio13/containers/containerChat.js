import mongoose from "mongoose";
import modelsChat from "../models/modelsChat.js";

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

    async getChat(){
        const data = await modelsChat.find({}, {_id:0, __v:0});
        return data;
    };

    async addChat(data){
        const dataAdd = new modelsChat(data);
        const add = await dataAdd.save();
        return add;
    };

};