import logger from '../Config/logger.js';

export const getSingIn = (req, res) => {
    const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.isAuthenticated()) {
		res.redirect('/productos');
	}
	res.render('ingresar');
};

export const getSignUp = (req, res) => {
    const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.isAuthenticated()) {
		res.redirect('/productos');
	}
	res.render('registrarse');
};

export const getLogout = (req, res) => {
    const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	const user = req.user.username;
	req.logout((err) => {
		const saludo = `Hasta luego ${user}`;
		res.render('saludo', { saludo });
	});
};

export const getErrorLogin = (req, res) => {
	const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	res.render('login-error');
};

export const getErrorRegister = (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${method} ${url}`);
    res.render('register-error');
};

export const getInicio = (req, res) => {
	const { url, method } = req;
    logger.info(`Ruta ${method} ${url}`);
	if (req.user === undefined) {
		return res.render("inicio1")
	}
    const user = req.user.username
	console.log(req.user);
	const avatar = req.user.photo
    const saludo = `Bienvenido ${user}`
    res.render("inicio", {saludo, avatar})
}