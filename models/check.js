'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Check.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    emailOfClient: DataTypes.STRING,
    orderPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Check',
  });
  return Check;
};