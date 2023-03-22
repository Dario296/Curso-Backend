import containerProducts from '../containers/Products.js';
import logger from '../Config/logger.js';

const products = new containerProducts();

export const get = (req, res) => {
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.user === undefined) {
		return products
			.get()
			.then((productos) => {
				res.render('User/productosUser', { productos });
			})
			.catch((err) => {
				res.json(err);
			});
	}
	const user = req.user.username;
	const avatar = req.user.photo;
	const saludo = `Bienvenido ${user}`;
	if (req.user?.admin) {
		return products
			.get()
			.then((productos) => {
				res.render('Admin/productosAdmin', { productos, saludo, avatar });
			})
			.catch((err) => {
				res.json(err);
			});
	}
	products
		.get()
		.then((productos) => {
			res.render('UserLogin/productosUserLogin', { productos, saludo, avatar });
		})
		.catch((err) => {
			res.json(err);
		});
};

export const getB = (req, res) => {
	const name = req.body.nameb.charAt(0).toUpperCase() + req.body.nameb.slice(1);
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.user === undefined) {
		return products
			.get(name)
			.then((productos) => {
				res.render('User/productosUser', { productos });
			})
			.catch((err) => {
				res.json(err);
			});
	}
	const user = req.user.username;
	const avatar = req.user.photo;
	const saludo = `Bienvenido ${user}`;
	if (req.user?.admin) {
		return products
			.get(name)
			.then((productos) => {
				res.render('Admin/productosAdmin', { productos, saludo, avatar });
			})
			.catch((err) => {
				res.json(err);
			});
	}
	products
		.get(name)
		.then((productos) => {
			res.render('UserLogin/productosUserLogin', { productos, saludo, avatar });
		})
		.catch((err) => {
			res.json(err);
		});
};

export const add = (req, res) => {
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	const newProduct = {
		timestamp: Date.now(),
		name: req.body.name.toLowerCase().charAt(0).toUpperCase() + req.body.name.slice(1),
		description: req.body.description,
		code: req.body.code,
		price: req.body.price,
		photo: req.body.photo,
		stock: req.body.stock,
	};
	products
		.add(newProduct)
		.then(() => {
			res.redirect('/productos');
		})
		.catch((err) => {
			res.json(err);
		});
};

export const update = (req, res) => {
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	const id = req.params.id;
	const newProduct = {
		timestamp: Date.now(),
		name: req.body.name,
		description: req.body.description,
		code: req.body.code,
		price: req.body.price,
		photo: req.body.photo,
		stock: req.body.stock,
	};
	products
		.update(id, newProduct)
		.then(() => {
			res.redirect('/productos');
		})
		.catch((err) => {
			res.json(err);
		});
};

export const Delete = (req, res) => {
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	const id = req.params.id;
	products
		.delete(id)
		.then(() => {
			res.redirect('/productos');
		})
		.catch((err) => {
			res.json(err);
		});
};