'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.Product, { through: 'Checks'});
    }
  }
  Order.init({
    date: DataTypes.DATE,
    emailOfClient: DataTypes.STRING,
    orderPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};