'use strict';

const addTestCategories = [
  {
    name: "BestCategory1",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "BestCategory2",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "BestCategory3",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductCategories', addTestCategories,{});
  },

async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('ProductCategorie', null, {});
}
};
