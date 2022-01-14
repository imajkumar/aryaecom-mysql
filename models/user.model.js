// User
module.exports = function (sequelize, DataTypes) {
    let UsersModel = sequelize.define("users", {
     
      firstName : {
          type: DataTypes.STRING,
      },
      lastName : {
        type: DataTypes.STRING,
      },
      emailVerify : {
          type: DataTypes.STRING,
      },     
  
  
    });
    return UsersModel;
  };