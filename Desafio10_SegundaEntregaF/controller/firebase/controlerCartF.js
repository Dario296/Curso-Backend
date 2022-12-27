const FirebaseContainer = require('../../container/firebase/containerFirebase');

const Carrito = new FirebaseContainer();
const Producto = new FirebaseContainer();


const postCarrito = (req, res) => {
    Carrito.add('carritos', {timestamp: Date.now(), Productos: []})
        .then(id => {
            res.json({id: id});
        })
        .catch(err => {
            res.json(err);
        })
}

const getCarrito = (req, res) => {
    Carrito.get('carritos', req.params.id)
        .then(carritos => {
            res.json(carritos);
        })
        .catch(err => {
            res.json(err);
        })
}

const postProductoCarrito = (req, res) => {
    const idProducto = req.params.id;
    const idCarrito = req.params.id;
     
    Producto.get('productos', idProducto)
        .then (producto => {
            let product = {...producto}
            Carrito.get('carritos', idCarrito)
                .then (cart => {
                    let carr = {...cart}
                    carr.Productos.push(product)
                    Carrito.update('carritos', idCarrito, carr)
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
        })
        .catch(err => {
            res.json(err);
        })

}

const deleteProductoCarrito = (req, res) => {
    const idProducto = req.params.id_prod;
    const idCarrito = req.params.id;


    Carrito.get('carritos', idCarrito)
        .then (cart => {
            let carr = {...cart}
            let producto = carr.Productos.find(doc => doc.id === idProducto);
            console.log(producto);
            const index = carr.Productos.indexOf(producto);
            carr.Productos.splice(index, 1);
            Carrito.update('carritos', idCarrito, carr)
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

const deleteCarrito = (req, res) => {
    Carrito.delete('carritos', req.params.id)
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

