"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associations are
      UserRole.belongsTo(models.Role);
      UserRole.belongsTo(models.user);
    }
  }
  UserRole.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      roleId: { type: DataTypes.INTEGER, allowNull: false },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "UserRole",
    }
  );
  return UserRole;
};
