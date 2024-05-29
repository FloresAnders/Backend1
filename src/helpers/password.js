const {compareSync, genSaltSync, hashSync} = require('bcryptjs');

const encryptPassword = async(password) => {
  try {
    const salt = genSaltSync(10);
    if (salt) {
      return hashSync(password, salt);
    }
    return false;
  } catch (error) {
    console.error('helpers/password/encrypt error: ', error);
    return false;
  }
};

const comparePassword = async(password, hash) => {
  try {
    return compareSync(password, hash);
  } catch (error) {
    console.error('helpers/password/compare error: ', error);
    return false;
  }
};

module.exports = {encryptPassword, comparePassword};