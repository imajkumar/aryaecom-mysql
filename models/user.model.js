// User
module.exports = function ( sequelize, DataTypes )
{
  let UsersModel = sequelize.define( "admin_users", {

    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    user_photo: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    is_phone_verify: {
      type: DataTypes.INTEGER,
    },
    is_email_verify: {
      type: DataTypes.INTEGER,
    },
    is_email_verify: {
      type: DataTypes.INTEGER,
    },
    is_user_active: {
      type: DataTypes.DATE,
    },


  } );
  return UsersModel;
};