"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Responses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      submissionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Submissions", key: "id" },
        onDelete: "cascade",
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Questions", key: "id" },
      },
      answer: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Responses");
  },
};
