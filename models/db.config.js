import { NODE_ENV } from '../config/env';
import databaseConfig from '../config/config.json'
const databaseConfigEnv = databaseConfig[NODE_ENV]

module.exports = {

    HOST:  databaseConfigEnv.host,

    USER: databaseConfigEnv.username,

    PASSWORD: databaseConfigEnv.password,

    DB:databaseConfigEnv.database, 

    dialect: "mysql",

    pool: {

        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000

    }

};