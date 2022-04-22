"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations
      User.belongsToMany(models.Role, {
        through: "UserRole",
        foreignKey: "userId",
        otherKey: "roleId",
      });
      User.hasMany(models.Submission, { foreignKey: "userId" });
      User.belongsToMany(models.Survey, {
        through: "Submission",
        foreignKey: "userId",
        otherKey: "surveyId",
      });
    }
  }
  User.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      customerId: { type: DataTypes.INTEGER, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: flase },
      password: { type: DataTypes.STRING, allowNull: false },
      salt: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.ENUM("active", "inActive"),
        allowNull: false,
        defaultValue: "inActive",
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
