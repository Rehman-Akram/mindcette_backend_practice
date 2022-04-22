"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      Question.belongsTo(models.Dimension);
      Question.belongsToMany(models.Tag, {
        through: "QuestionTag",
        foreignKey: "questionId",
        otherKey: "tagId",
      });
      Question.belongsToMany(models.Survey, {
        through: "SurveyQuestion",
        foreignKey: "questionId",
        otherKey: "surveyId",
      });
      Question.hasMany(models.Response);
      Question.belongsToMany(models.Submission, {
        through: "Response",
        foreignKey: "questionId",
        otherKey: "submissionId",
      });
    }
  }
  Question.init(
    {
      dimensionid: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.ENUM("simple", "demographic"), allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
