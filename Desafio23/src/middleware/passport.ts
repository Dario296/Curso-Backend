import { UsersService } from '../users/2Service/users.service';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bCrypt from 'bcrypt';
import { createTransport } from 'nodemailer';
import Logger from '../Config/logger';

const USER = process.env.USER;
const PASS = process.env.PASS;

const transporter = createTransport({
	service: 'gmail',
	port: 587,
	auth: {
		user: USER,
		pass: PASS,
	},
});

const dbUser = new UsersService();

export const register = new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
	const { name, lastName, address, age, phoneNumber } = req.body;
	const user = await dbUser.get(username);
	const mailOptions = {
		from: 'Servidor Node.js',
		to: USER,
		subject: 'Nuevo Usuario Registrado',
		html: `<h1 style="color: blue;">Se Ha Registrado Un Nuevo Usuario ${name}, ${lastName}, ${address}, ${age}, ${phoneNumber}</h1>`,
	};
	if (user) {
		return done('el usuario ya esta registrado', false);
	}
	const url = req.file.path.slice(6);
	const newUser = {
		name,
		lastName,
		address,
		age,
		phoneNumber,
		photo: url,
		username,
		password: createHash(password),
		// admin: true,
	};
	await dbUser.create(newUser);
	try {
		const mensaje = await transporter.sendMail(mailOptions);
		Logger.info(mensaje);
	} catch (err) {
		Logger.error(err);
	}
	done(null, newUser);
});

export const login = new LocalStrategy(async (username, password, done) => {
	const user = await dbUser.get(username);
	if (!user) {
		return done('no existe el usuario', false);
	}
	if (!isValidPassword(user, password)) {
		return done('Contraseña incorrecta', false);
	}
	return done(null, user);
});

passport.serializeUser((user, done) => {
	done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
	const user = await dbUser.get(username);
	done(null, user);
});

function createHash(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

function isValidPassword(user, password) {
	return bCrypt.compareSync(password, user.password);
}
