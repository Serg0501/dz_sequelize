'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.ProductCategory, {
        foreignKey: {field: 'productCategoryId'}
      });
      Product.belongsToMany(models.Order, {through: 'Checks'});
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};