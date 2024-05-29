const {DataTypes} = require('sequelize');

const grammarExerciseModel = {
  name: 'GrammarExercise',
  model: {
    correct: DataTypes.STRING(128), 
    incorrect: DataTypes.STRING(128), 
    question: DataTypes.STRING(128),
    points: DataTypes.INTEGER,
    level: DataTypes.INTEGER    
  }
};

module.exports = {grammarExerciseModel};