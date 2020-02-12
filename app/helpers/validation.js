import env from '../../env';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = password => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPasswod, password) => {
    return bcrypt.compareSync(password, hashedPassword);
};

const generateUserToken = (email, id, is_admin, first_name, last_name) => {
    const token = jwt.sign({
        email,
        user_id: id,
        is_admin,
        first_name,
        last_name
    },
    env.secret, {expiresIn: '3d'});
    return token
}

const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};

const validatePassword = (password) => {
    if (password.length <=7 || password === '') {
        return false;
    } return true;
};

const isEmpty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }

    if (input.replace(/\s/g, '').length) {
        return false;
    } return true;
}

const empty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
}

export {
    hashPassword,
    comparePassword,
    generateUserToken,
    isValidEmail,
    validatePassword,
    isEmpty,
    empty
};
