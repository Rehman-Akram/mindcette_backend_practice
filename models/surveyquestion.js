"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SurveyQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      SurveyQuestion.belongsTo(models.Survey);
      SurveyQuestion.belongsTo(models.Question);
    }
  }
  SurveyQuestion.init(
    {
      surveyId: { type: DataTypes.INTEGER, allowNull: false },
      questionId: { type: DataTypes.INTEGER, allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "SurveyQuestion",
    }
  );
  return SurveyQuestion;
};
