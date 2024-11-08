const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const goals = sequelize.define(
    'goals',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      start_date: {
        type: DataTypes.DATE,
      },

      end_date: {
        type: DataTypes.DATE,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  goals.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.goals.belongsTo(db.users, {
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
      constraints: false,
    });

    db.goals.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.goals.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return goals;
};
