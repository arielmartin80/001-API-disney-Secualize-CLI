const express = require('express')
const app = express()
    //const { connection } = require('./database/db')
const { sequelize } = require('./models/index')

// Setting
const PORT = process.env.PORT || 3000

// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Rutas

app.get('/', function(req, res) {
    res.json({ Hola: 'Disney' })
})

app.use('/api', require('./routes/routes'))
app.use('/api/movies', require('./routes/moviesRoutes'))
app.use('/api/characters', require('./routes/charactersRoutes'))

// Arrancar el servidor

app.listen(PORT, function() {
    console.log(`La app ha arrancado en http://localhost:${PORT}`)

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexion")
    })
})