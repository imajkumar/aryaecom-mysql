module.exports = {

    HOST: "localhost",

    USER: "admin",

    PASSWORD: "home",

    DB: "app",

    dialect: "mysql",

    pool: {

        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000

    }

};