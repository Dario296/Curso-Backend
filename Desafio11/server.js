const express = require('express');
const productos = require('./routers/routers');
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

io.on('connection', async socket =>{
  socket.emit('messages', await chat.getChat())

  socket.on('new-message', async data => {
    await chat.addChat({...data, fyh: new Date().toLocaleString()})

    io.sockets.emit('messages', await chat.getChat())
  })
})

httpServer.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});