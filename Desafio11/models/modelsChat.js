const mongoose = require('mongoose');

const collectionChat = "chat"

const schemaChat = new mongoose.Schema({
    mensajes: []
})

const models = mongoose.model(collectionChat, schemaChat)

module.exports = models