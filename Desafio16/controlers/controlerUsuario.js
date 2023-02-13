import logger from '../utils/logers.js';

export const getSignIn = (req, res) => {
  logger.info(`Ruta ${method} ${url}`);
  if (req.isAuthenticated()) {
    res.redirect('/productos');
  }
  res.render('ingresar');
};

export const getSignUp = (req, res) => {
  logger.info(`Ruta ${method} ${url}`);
  if (req.isAuthenticated()) {
    res.redirect('/productos');
  }
  res.render('registrarse');
};

export const getLogout = (req, res) => {
  logger.info(`Ruta ${method} ${url}`);
  const usuario = req.user.username;
  req.logout((err) => {
    const saludo = `Hasta luego ${usuario}`;
    res.render('saludo', { saludo });
  });
};
