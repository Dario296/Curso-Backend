const express = require('express');
const productos = require('./routers/routers');
const productosTest = require('./routers/routersTest');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const container = require('./containers/container');
const chat = new container();

const app = express();
const port = process.env.port || 8080;
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(__dirname + "/Public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', productos);
app.use('/test', productosTest);

io.on('connection', async socket =>{
  const listaMensajes = await chat.getChat()
  const id = await chat.getChatId()

  socket.emit('messages', listaMensajes)

  socket.on('new-message', async data => {
    const mensaje = {...data, fyh: new Date().toLocaleString()}
    if (listaMensajes.length === 0) {
      const mensajeNuevo = await chat.addChat()
      await chat.updateChat(mensajeNuevo._id, {$push: {mensajes: mensaje}})
    }else{
      await chat.updateChat(id, {$push: {mensajes: {...data, fyh: new Date().toLocaleString()}}})
    }

    io.sockets.emit('messages', listaMensajes)
  })
})

httpServer.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});