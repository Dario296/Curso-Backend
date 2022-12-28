const MongoContainer = require('../../container/mongo/containerMongo');

const Carrito = new MongoContainer();
const Producto = new MongoContainer();

const postCarrito = (req, res) => {

    Carrito.addCarrito({
        timestamp: Date.now(),
        productos: []
    })
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}

const getCarrito = (req, res) => {
    const id = req.params.id

    if (id) {
        Carrito.getCart(id)
        .then(carritos => {
            res.json(carritos);
        })
        .catch(err => {
            res.json(err);
        })
    }
    else{
        Carrito.getCart()
            .then(carritos => {
                res.json(carritos);
            })
            .catch(err => {
                res.json(err);
            })
    }
}

const postProductoCarrito = (req, res) => {
    const idProducto = req.params.id;
    const idCarrito = req.params.id;

    Producto.get('productos', idProducto)
        .then(producto => {
            Carrito.add('carritos', producto, idCarrito)
                .then(id => {
                    res.json({id: id});
                })
                .catch(err => {
                    res.json(err);
                })
        })
        .catch(err => {
            res.json(err);
        })
}

const deleteProductoCarrito = (req, res) => {
    const idProducto = req.params.id_prod;
    const idCarrito = req.params.id;

    Carrito.delete('carritos', idCarrito, idProducto)
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}

const deleteCarrito = (req, res) => {
    Carrito.deleteCart(req.params.id)
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}



module.exports = {
    postCarrito,
    getCarrito,
    postProductoCarrito,
    deleteProductoCarrito,
    deleteCarrito
}
