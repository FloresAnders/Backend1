const {Sequelize} = require('sequelize');
const {userModel, sessionVideoModel, grammarQuizModel, grammarExerciseModel} = require('../models');
const {DATABASE_PROPERTIES} = require('./constants');

const buildConnection = () => new Sequelize(DATABASE_PROPERTIES);

const initialize = async() => {
  const connection = buildConnection();
  try {
    await connection.authenticate();
    connection.define(userModel.name, userModel.model);
    connection.define(sessionVideoModel.name, sessionVideoModel.model);
    const GrammarQuiz = connection.define(grammarQuizModel.name, grammarQuizModel.model);
    const GrammarExercise = connection.define(grammarExerciseModel.name, grammarExerciseModel.model);
    GrammarQuiz.hasMany(GrammarExercise);
    await connection.sync({alter: true});
    connection.close();
  } catch (error) {
    console.error('helpers/database/initialize error: ', error);
    connection.close();
  }
};

module.exports = {initialize, buildConnection};