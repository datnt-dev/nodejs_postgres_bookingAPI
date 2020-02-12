import moment from "moment";
import dbQuery from "../db/dev/dbQuery";

import {
  hashPassword,
  isValidEmail,
  isEmpty,
  validatePassword,
  generateUserToken
} from "../helpers/validation";

import { errorMessage, successMessage, status } from "../helpers/status";

const createAdmin = async (req, res) => {
  const { email, first_name, last_name, password } = req.body;

  const {is_admin} = req.user;

  const isAdmin = true;
  const created_on = moment(new Date());

  if (!is_admin === false) {
    errorMessage.error = 'Sorry you are unauthorized to create an admin';
    return res.status(status.bad).send(errorMessage);
  }

  if (isEmpty(email) || isEmpty(first_name) || isEmpty(last_name) || isEmpty(password)) {
    errorMessage.error = 'Cannot be empty';
    return res.status(status.bad).send(errorMessage);
    
  }
};
