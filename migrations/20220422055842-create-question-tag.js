"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("QuestionTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Questions", key: "id" },
        onDelete: "cascade",
      },
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Tags", key: "id" },
        onDelete: "cascade",
      },
      isEnabled: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("QuestionTags");
  },
};
