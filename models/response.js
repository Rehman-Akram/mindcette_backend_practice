"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      Response.belongsTo(models.Submission);
      Response.belongsTo(models.Question);
    }
  }
  Response.init(
    {
      submissionId: { type: DataTypes.INTEGER, allowNull: false },
      questionId: { type: DataTypes.INTEGER, allowNull: false },
      answer: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Response",
    }
  );
  return Response;
};
