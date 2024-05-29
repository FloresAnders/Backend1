const {DataTypes} = require('sequelize');

const sessionVideoModel = {
  name: 'SessionVideo',
  model: {
    embedId: DataTypes.STRING(16),
    title: DataTypes.STRING(64),
    category: DataTypes.STRING(64),
    session: DataTypes.INTEGER
  }
};

module.exports = {sessionVideoModel};