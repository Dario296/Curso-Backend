const express = require('express');
const productos = require('./routers/routers');
const productosTest = require('./routers/routersTest');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const container = require('./containers/container');
const { normalize, denormalize, schema } = require('normalizr')

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

const listaMensajes =[]
const autor = new schema.Entity('autor')
const mensajes = new schema.Entity('mensajes', {
  autores: [autor]
})
const objNormalizado = normalize(listaMensajes, mensajes)
const objDenormalizado = denormalize(objNormalizado.result, mensajes, objNormalizado.entities)

io.on('connection', async socket =>{

  socket.emit('messages', objDenormalizado)

  socket.on('new-message', async data => {
    const mensaje = {...data, fyh: new Date().toLocaleString()}
    listaMensajes.push(mensaje)
    console.log(listaMensajes);
    io.sockets.emit('messages', objDenormalizado)
  })
})

httpServer.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});