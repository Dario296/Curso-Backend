import logger from '../Config/logger.js';

export const getSingIn = (req, res) => {
    const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.isAuthenticated()) {
		res.redirect('/productos');
	}
	res.render('User/ingresar');
};

export const getSignUp = (req, res) => {
    const { url, method } = req;
	logger.info(`Ruta ${method} ${url}`);
	if (req.isAuthenticated()) {
		res.redirect('/productos');
	}
	res.render('User/registrarse');
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
	res.render('User/login-error');
};

export const getErrorRegister = (req, res) => {
    const { url, method } = req;
    logger.info(`Ruta ${method} ${url}`);
    res.render('User/register-error');
};

export const getInicio = (req, res) => {
	const { url, method } = req;
    logger.info(`Ruta ${method} ${url}`);
	if (req.user === undefined) {
		return res.render("User/inicioUser")
	}
    const user = req.user.username
	console.log(req.user);
	const avatar = req.user.photo
    const saludo = `Bienvenido ${user}`
	if (req.user?.admin) {
		return res.render("Admin/inicioAdmin", {saludo, avatar})
	}
    res.render("UserLogin/inicioUserLogin", {saludo, avatar})
}