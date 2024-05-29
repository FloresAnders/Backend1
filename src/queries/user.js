const { buildConnection } = require("../helpers");
const { userModel } = require("../models");

const initUser = async (connection) => {
  try {
    await connection.authenticate();
    const User = connection.define(userModel.name, userModel.model);
    await connection.sync();
    return User;
  } catch (error) {
    throw error;
  }
};

const createUser = async (data) => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const user = await User.create(data);
    connection.close();
    return user;
  } catch (error) {
    console.error("queries/user/create error: ", error);
    connection.close();
    return false;
  }
};

const getUser = async (where) => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const user = await User.findOne({ where });
    connection.close();
    return user;
  } catch (error) {
    console.error("queries/user/get error: ", error);
    connection.close();
    return false;
  }
};

const updateUser = async (id, data) => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const count = await User.update(data, { where: { id } });
    connection.close();
    return count;
  } catch (error) {
    console.error("queries/user/update error: ", error);
    connection.close();
    return 0;
  }
};

const updateUserByEmail = async (email, data) => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const count = await User.update(data, { where: { email } });
    connection.close();
    return count;
  } catch (error) {
    console.error("queries/user/updateByEmail error: ", error);
    connection.close();
    return 0;
  }
};

const getAllUsers = async () => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const users = await User.findAll();
    connection.close();
    return users;
  } catch (error) {
    console.error("queries/user/getAll error: ", error);
    connection.close();
    return false;
  }
};
const getUserByEmail = async (email) => {
  const connection = buildConnection();
  try {
    const User = await initUser(connection);
    const user = await User.findOne({ where: { email } });
    connection.close();
    return user;
  } catch (error) {
    connection.close();
    return false;
  }
};

module.exports = { createUser, getUser, updateUser, updateUserByEmail, getUserByEmail, getAllUsers };
