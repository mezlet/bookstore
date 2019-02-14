'use strict';
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please Enter Name"
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please Enter Username"
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please Enter Email Address"
      },
      unique: {
        args: true,
        msg: "Email Already Exists"
      },
      validate: {
        isEmail: {
          args: true,
          msg: " Enter a valid Email Address"
        },
      } 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please Enter Password"
      },
      validate: {
        isNotShort: (value) => {
          if(value.length < 8){
            throw new Error ('Password should be at least 8 characters');
          }
        },
      },
    }
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Book, {
      foreignKey: 'UserId',
    })
  };
  return User;
};