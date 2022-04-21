const { Character, Movie } = require('../models/index')

module.exports = {

    // GET ALL
    async getAll(req, res) {

        const name = req.query['name']
        const age = req.query['age']
        const idMovie = req.query['movies']

        if (name) {

            await Character.findAll({
                where: { name },

            }).then(character => {
                res.json(character)
            })
        }

        if (age) {

            await Character.findAll({
                where: { age },

            }).then(characters => {
                res.json(characters)
            })
        }

        if (idMovie) {

            const movie = await Movie.findByPk(idMovie, {
                attributes: ['id', 'title'],
            })

            //const characters = movie.getCharacter()

            res.json(movie)


        }


        // si no hay query
        else {

            await Character.findAll({
                attributes: ['image', 'name'],
            })

            .then(characters => {
                res.json(characters)
            })

            .catch(error => {
                console.log('error: ', error)
                res.status(500).json('error 500')
            })
        }

    },


    // get ONE character with movies associated
    async getOne(req, res) {

        const id = req.params.id

        await Character.findByPk(id)

        .then(character => {

            character.getMovies({
                attributes: {
                    exclude: ['id', 'genre_id', 'char_movie'],

                }
            })

            .then(movies => {

                res.status(200).json({ character, movies })
            })
        })

        .catch(error => {
            console.log(error)
            res.status(500).json('error 500')
        })
    },


    // CREATE
    async create(req, res) {

        try {
            const { name, image, age, weight, history } = req.body
            const character = await Character.create({
                name,
                image,
                age,
                weight,
                history
            })

            res.status(200).json(character)

        } catch (error) {
            console.log(error)
            res.status(500).json('error 500')
        }
    },


    //UPDATE
    async update(req, res) {
        const id = req.params.id

        try {
            const { name, image, age, weight, history } = req.body

            await Character.update({
                name,
                image,
                age,
                weight,
                history
            }, {
                where: { id }
            })

            res.status(200).json(req.body)

        } catch (error) {
            console.log(error)
            res.status(500).json('error 500')
        }
    },


    // DELETE
    async delete(req, res) {
        const id = req.params.id
        const exist = await Character.findByPk(id)

        if (exist) {
            await Character.destroy({
                where: { id }
            })
            res.status(200).json(`Character with id:${id} deleted`)

        } else {
            res.status(404).json('Character not found')
        }
    }


}