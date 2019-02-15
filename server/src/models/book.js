'use strict';
export default (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter title"
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter description"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please enter quantity"
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'UserId',
      }
    },
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    })
  };
  return Book;
};