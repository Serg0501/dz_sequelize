'use strict';

const addTestOrders = [
  {
    date: new Date(),
    emailOfClient: 'BigBen@gmail.com',
    orderPrice: 777.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: new Date(),
    emailOfClient: 'TagMahal@gmail.com',
    orderPrice: 999.88,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    date: new Date(),
    emailOfClient: 'Victory@gmail.com',
    orderPrice: 555.44,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', addTestOrders, {});
  },

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Orders', null, {});   
}
};
