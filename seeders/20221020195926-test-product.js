'use strict';

function generateTestProducts(){
  const products = [];
  for(let i=1; i<=5; i++){
    products.push({
      productCategoryId: 1,
      name: `Mark${i}`,
      price: `${i}`,
      discription: `This model of Mark${i} is THE BEST ever!!!!`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return products;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", generateTestProducts(), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  }
};