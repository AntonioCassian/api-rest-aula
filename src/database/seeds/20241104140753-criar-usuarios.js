"use strict";
const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "John1",
          email: "john1@gmail.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John2",
          email: "john2@gmail.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "John3",
          email: "john3@gmail.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
