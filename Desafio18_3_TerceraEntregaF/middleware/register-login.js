import containerUser from '../containers/containerUser.js';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bCrypt from 'bcrypt';

const dbUser = new containerUser();

export const register = new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
	const { name, lastName, address, age, phoneNumber } = req.body;
	const user = await dbUser.get(username);
	if (user) {
		return done('el usuario ya esta registrado', false);
	}
	const newUser = {
		name,
		lastName,
		address,
		age,
		phoneNumber,
		photo: req.file.path,
		username,
		password: createHash(password),
	};
	await dbUser.add(newUser);
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
