"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Demographic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      Demographic.belongsToMany(models.Survey, {
        through: "SurveyDemographic",
        foreignKey: "demographicId",
        otherKey: "surveyId",
      });
    }
  }
  Demographic.init(
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
      modelName: "Demographic",
    }
  );
  return Demographic;
};
