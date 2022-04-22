"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      Survey.hasMany(models.Submission);
      Survey.belongsToMany(models.User, {
        through: "Submission",
        foreignKey: "surveyId",
        otherKey: "userId",
      });
      Survey.belongsToMany(models.Question, {
        through: "SurveyQuestion",
        foreignKey: "surveyId",
        otherKey: "questionId",
      });
      Survey.belongsToMany(models.Demographic, {
        through: "SurveyDemographic",
        foreignKey: "surveyId",
        otherKey: "demographicId",
      });
    }
  }
  Survey.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Survey",
    }
  );
  return Survey;
};
