const { createUser, getUser, updateUser, getUserByEmail, getAllUsers, updateUserByEmail } = require("./user");
const { getAllExercises } = require("./grammarExercise");

module.exports = { createUser, updateUser, getUser, getAllExercises, updateUserByEmail, getUserByEmail, getAllUsers };
