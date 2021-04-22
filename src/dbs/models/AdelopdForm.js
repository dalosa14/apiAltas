const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../dbConnect')
class form extends Model {}
form.init({
  token: {type:DataTypes.TEXT,allowNull: true,},
  paso1: {type:DataTypes.TEXT,allowNull: true,},
  paso2: {type:DataTypes.TEXT,allowNull: true,},
  paso3: {type:DataTypes.TEXT,allowNull: true,},
  paso4: {type:DataTypes.TEXT,allowNull: true,},
  paso5: {type:DataTypes.TEXT,allowNull: true,},
  paso6: {type:DataTypes.TEXT,allowNull: true,},
  paso7: {type:DataTypes.TEXT,allowNull: true,},
  paso8: {type:DataTypes.TEXT,allowNull: true,},
  estado: {type:DataTypes.INTEGER, allowNull: true },
  reportado: {type:DataTypes.BOOLEAN, allowNull: true },

}, { sequelize, modelName: 'AdelopdForm',  timestamps: true,
});
module.exports = form;