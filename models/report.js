"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations
      Report.belongsTo(models.Submission);
    }
  }
  Report.init(
    {
      submissionId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.ENUM("partial", "full"), allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Report",
    }
  );
  return Report;
};
