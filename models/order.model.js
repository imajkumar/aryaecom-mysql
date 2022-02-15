// User
module.exports = function ( sequelize, DataTypes )
{
  let OrderModel = sequelize.define( "orders", {

    order_id: {
      type: DataTypes.STRING(50),
    },
    item_name: {
      type: DataTypes.STRING,
    },
   
    
  } );
  return OrderModel;
};