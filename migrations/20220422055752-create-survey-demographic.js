"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SurveyDemographics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      demographicId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Demographics", key: "id" },
      },
      surveyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Surveys", key: "id" },
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
    await queryInterface.dropTable("SurveyDemographics");
  },
};
