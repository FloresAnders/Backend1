const {DataTypes} = require('sequelize');

const grammarQuizModel = {
  name: 'GrammarQuiz',
  model: {
    title: DataTypes.STRING(32)
  }
};

module.exports = {grammarQuizModel};