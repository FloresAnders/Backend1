const {DataTypes} = require('sequelize');

const userModel = {
  name: 'User',
  model: {
    name: DataTypes.STRING(64),
    email: DataTypes.STRING(64),
    password: DataTypes.STRING(64),
    streak: DataTypes.INTEGER,
    picture: DataTypes.STRING(8191),
    country: DataTypes.STRING(32),
    profession: DataTypes.STRING(64)
  }
};

module.exports = {userModel};