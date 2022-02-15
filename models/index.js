const dbConfig = require("./db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',
  operatorsAliases: 0,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize, Sequelize);
db.Order = require("./order.model")(sequelize, Sequelize);
db.User.hasMany(db.Order, { as: "ordersA" })
db.Order.belongsTo(db.User, {
  foreignKey: "userId",
  as: "user",
});

db.sequelize.sync({alter:true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});


module.exports = db;