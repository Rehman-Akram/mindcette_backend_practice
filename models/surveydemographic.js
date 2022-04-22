"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SurveyDemographic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      SurveyDemographic.belongsTo(models.Demographic);
      SurveyDemographic.belongsTo(models.Survey);
    }
  }
  SurveyDemographic.init(
    {
      demographicId: { type: DataTypes.INTEGER, allowNull: false },
      surveyId: { type: DataTypes.INTEGER, allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "SurveyDemographic",
    }
  );
  return SurveyDemographic;
};
