const { Sequelize, DataTypes } = require('sequelize')
const config = require('../../config/database')
const User = require('../models/User')
const db = {}

db.connection = new Sequelize(config.database, config.username, config.password, config)

// Vinculamos a nuestro modelo a BD
db.User = require('../models/User')(db.connection, DataTypes)
db.Address = require('../models/Address')(db.connection, DataTypes)

// Asociar los modelos
db.User.associate(db)
db.Address.associate(db)


module.exports = db