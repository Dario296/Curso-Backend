"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const users_service_1 = require("../users/2Service/users.service");
const passport_1 = require("passport");
const passport_local_1 = require("passport-local");
const bcrypt_1 = require("bcrypt");
const nodemailer_1 = require("nodemailer");
const logger_1 = require("../Config/logger");
const USER = process.env.USER;
const PASS = process.env.PASS;
const transporter = (0, nodemailer_1.createTransport)({
    service: 'gmail',
    port: 587,
    auth: {
        user: USER,
        pass: PASS,
    },
});
const dbUser = new users_service_1.UsersService();
exports.register = new passport_local_1.Strategy({ passReqToCallback: true }, async (req, username, password, done) => {
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
    };
    await dbUser.create(newUser);
    try {
        const mensaje = await transporter.sendMail(mailOptions);
        logger_1.default.info(mensaje);
    }
    catch (err) {
        logger_1.default.error(err);
    }
    done(null, newUser);
});
exports.login = new passport_local_1.Strategy(async (username, password, done) => {
    const user = await dbUser.get(username);
    if (!user) {
        return done('no existe el usuario', false);
    }
    if (!isValidPassword(user, password)) {
        return done('Contraseña incorrecta', false);
    }
    return done(null, user);
});
passport_1.default.serializeUser((user, done) => {
    done(null, user.username);
});
passport_1.default.deserializeUser(async (username, done) => {
    const user = await dbUser.get(username);
    done(null, user);
});
function createHash(password) {
    return bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(10), null);
}
function isValidPassword(user, password) {
    return bcrypt_1.default.compareSync(password, user.password);
}
//# sourceMappingURL=passport.js.map