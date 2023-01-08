const express = require('express');
const productos = require('./routers/routers');
const productosTest = require('./routers/routersTest');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const container = require('./containers/container');
const { normalize, denormalize, schema } = require('normalizr')
const util = require ('util')

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

  const autor = new schema.Entity('autor')
  const mensajes = new schema.Entity('mensajes', {
    autores: [autor]
  })
  const objNormalizado = normalize(listaMensajes, mensajes)
  const objDenormalizado = denormalize(objNormalizado.result, mensajes, objNormalizado.entities)
  print(listaMensajes);


  // console.log('Longitud del objeto original: ' + JSON.stringify(listaMensajes).length)
  // console.log('Longitud del objeto normalizado: ' + JSON.stringify(objNormalizado).length)
  // console.log('Longitud del objeto denormalizado: ' + JSON.stringify(objDenormalizado).length)
  // console.log('Porcentaje de compresion: ' + (100 - (JSON.stringify(objNormalizado).length * 100 / JSON.stringify(holding).length)) + "%")

  socket.emit('messages', listaMensajes)

  socket.on('new-message', async data => {
    await chat.addChat({...data, fyh: new Date().toLocaleString()})

    io.sockets.emit('messages', listaMensajes)
  })
})

function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}

httpServer.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});