'use strict';

const addTestChecks = [
  {
    orderId: 1,
    productId: 1,
    amountOfProduct: 2,
    totalPrice: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Checks', addTestChecks, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Checks', null, {});
  }
};