"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SurveyQuestions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      surveyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Submissions", key: "id" },
        onDelete: "cascade",
      },
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Questions", key: "id" },
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
    await queryInterface.dropTable("SurveyQuestions");
  },
};
