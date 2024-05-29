const {buildConnection} = require('../helpers');
const {grammarExerciseModel} = require('../models');

const initGrammarExercise = async(connection) => {
  try {
    await connection.authenticate();
    const grammarExercise = connection.define(grammarExerciseModel.name, grammarExerciseModel.model);
    await connection.sync();
    return grammarExercise;
  } catch (error) {
    throw error;
  }
};

const getAllExercises = async(where) => {
  const connection = buildConnection();
  try {
    const GrammarExercise = await initGrammarExercise(connection);
    const grammarExercise = await GrammarExercise.findAll({where});
    connection.close();
    return grammarExercise;
  } catch (error) {
    console.error('queries/grammarExercise/getAllExercises error: ', error);
    connection.close();
    return false;
  }
};

const createExercise = async (exerciseData) => {
  const connection = buildConnection();
  try {
    const GrammarExercise = await initGrammarExercise(connection);
    const newExercise = await GrammarExercise.create(exerciseData);
    connection.close();
    return newExercise;
  } catch (error) {
    console.error('queries/grammarExercise/createExercise error: ', error);
    connection.close();
    throw error;
  }
};

const updateExercise = async (exerciseId, updatedExerciseData) => {
  const connection = buildConnection();
  try {
    const GrammarExercise = await initGrammarExercise(connection);
    const [numUpdatedRows, updatedExercise] = await GrammarExercise.update(updatedExerciseData, {
      where: { id: exerciseId },
      returning: true,
    });
    connection.close();
    if (numUpdatedRows === 0) {
      throw new Error(`Exercise with ID ${exerciseId} not found.`);
    }
    return updatedExercise[0];
  } catch (error) {
    console.error('queries/grammarExercise/updateExercise error: ', error);
    connection.close();
    throw error;
  }
};

const getExerciseById = async (exerciseId) => {
  const connection = buildConnection();
  try {
    const GrammarExercise = await initGrammarExercise(connection);
    const exercise = await GrammarExercise.findByPk(exerciseId);
    connection.close();
    if (!exercise) {
      throw new Error(`Exercise with ID ${exerciseId} not found.`);
    }
    return exercise;
  } catch (error) {
    console.error('queries/grammarExercise/getExerciseById error: ', error);
    connection.close();
    throw error; 
  }
};

const deleteExercise = async (exerciseId) => {
  const connection = buildConnection();
  try {
    const GrammarExercise = await initGrammarExercise(connection);
    const numDeletedRows = await GrammarExercise.destroy({
      where: { id: exerciseId },
    });
    connection.close();
    if (numDeletedRows === 0) {
      throw new Error(`Exercise with ID ${exerciseId} not found.`);
    }
  } catch (error) {
    console.error('queries/grammarExercise/deleteExercise error: ', error);
    connection.close();
    throw error;
  }
};

module.exports = {
  getAllExercises,
  createExercise,
  updateExercise,
  getExerciseById,
  deleteExercise,
};