import { get, add, update, Delete, getB } from '../controlers/controlerProducts.js';
import { getSingIn, getSignUp, getLogout, getErrorLogin, getErrorRegister, getInicio } from '../controlers/controlerUser.js';
import authentication from '../middleware/authentication.js';
import { Router } from 'express';
import { register, login } from '../middleware/register-login.js';
import passport from 'passport';
import multer from "multer"
import { deleteCarrito, getCarrito, postProductoCarrito, deleteProductoCarrito } from "../controlers/controlerCart.js";

const upload = multer({ dest: './public/img/uploads/' })

passport.use('register', register);
passport.use('login', login);

const inicio = Router();
const productos = Router();
const ingresar = Router();
const registrarse = Router();
const salir = Router();
const carrito = Router();

ingresar.get('/', getSingIn);
ingresar.post('/', passport.authenticate('login', { failureRedirect: '/ingresar/errorIngresar', successRedirect: '/inicio' }));
ingresar.get('/errorIngresar', getErrorLogin);

registrarse.get('/', getSignUp);
registrarse.post('/', upload.single('photo'), passport.authenticate('register', { failureRedirect: 'registrarse/errorRegistro', successRedirect: '/inicio' }));
registrarse.get('/errorRegistro', getErrorRegister);

salir.get('/', getLogout, deleteCarrito );

inicio.get('/',  getInicio);

productos.get('/', get);
productos.post('/busqueda', getB);
productos.post('/', authentication, add);
productos.put('/:id', authentication, update);
productos.delete('/:id', authentication, Delete);

carrito.get("/", authentication, getCarrito)
carrito.post("/", authentication, postProductoCarrito)
carrito.delete("/", authentication, deleteProductoCarrito)

export { inicio, productos, ingresar, registrarse, salir, carrito };
