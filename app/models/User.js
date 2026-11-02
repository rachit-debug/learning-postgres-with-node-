const { DataTypes } = require("sequelize");
const { Connection } = require("../config/Connection");


let User = Connection.define('User',{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  UserName : {
    type : DataTypes.STRING,
    allowNull : false
  },
  UserEmail : {
    type : DataTypes.STRING,
    unique : true,
    allowNull : false,
  },
  PhoneNumber : {
    type : DataTypes.STRING,
    allowNull : false

  },
  Message : {
    type : DataTypes.TEXT,
    allowNull : false
  }

},{
  tableName : 'user',
  timestamps : true
})

module.exports = {User}
