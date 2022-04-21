require('dotenv').config()

module.exports = {

    // Conexion
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,

    //// Configurar Seeds en json
    //seederStorage: "json",
    //seederStoragePath: "sequelizeSeeds.json",

    //// Configurar Seeds en db
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeSeeds",

    define: {
        timestamps: false,

        // Genera claves foraneas del tipo: user_id
        underscored: true
    }
}