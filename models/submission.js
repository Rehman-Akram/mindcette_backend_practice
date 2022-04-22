"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      Submission.hasMany(models.Response);
      Submission.belongsToMany(models.Question, {
        through: "Response",
        foreignKey: "submissionId",
        otherKey: "questionId",
      });
      Submission.hasMany(models.Report);
      Submission.belongsTo(models.Survey);
      Submission.belongsTo(models.User);
    }
  }
  Submission.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      surveyId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.ENUM("inProgress", "completed"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Submission",
    }
  );
  return Submission;
};
