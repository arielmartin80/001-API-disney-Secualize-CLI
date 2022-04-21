const { Movie, sequelize } = require('../models/index')

module.exports = {

    //CREATE
    async create(req, res) {
        const { title, image, create_date, qualification, genre_id } = req.body

        if (qualification < 1 || qualification > 5) {
            return res.status(300).json({ mje: 'la calificacion es de 1 a 5' })
        }

        try {
            const newMovie = await Movie.create({
                title,
                image,
                create_date,
                qualification,
                genre_id
            })

            res.status(200).json(newMovie)

        } catch (error) {
            res.status(500).json(error)
        }
    },


    // GET ALL and filtered Movies
    async getAll(req, res) {

        const title = req.query['title']
        const idGenre = req.query['idGenre']
        const order = req.query['order']

        if (title) {

            await Movie.findAll({
                where: { title: title },
                attributes: ['image', 'title', 'create_date']
            }).then(movies => {
                res.json(movies)
            })
        }

        if (idGenre) {

            await Movie.findAll({
                where: { genre_id: idGenre }
            }).then(movies => {
                res.json(movies)
            })
        }

        if (order) {

            await Movie.findAll({
                order: [
                    ['title', order]
                ]
            }).then(movies => {
                res.json(movies)
            })
        }
        // GET ALL
        else {

            let movies = await Movie.findAll({
                attributes: ['image', 'title', 'create_date']
            })

            return res.json(movies)

        }

    },


    // GET ONE
    async getOne(req, res) {
        const id = req.params.id
        const movie = await Movie.findByPk(id)

        res.json(movie)
    },


    // UPDATE
    async update(req, res) {
        const id = req.params.id

        try {
            const { title, image, create_date, qualification, genre_id } = req.body

            if (qualification < 1 || qualification > 5) {
                return res.status(300).json({ mje: 'la calificacion es de 1 a 5' })
            }

            const countUpdates = await Movie.update({
                title,
                image,
                create_date,
                qualification,
                genre_id
            }, {
                where: { id }
            })

            res.json(req.body)

        } catch (error) {
            console.log(error)
            res.status(500).json('error 500')
        }
    },


    // DELETE 
    async delete(req, res) {
        const id = req.params.id

        const exist = await Movie.findByPk(id)

        if (exist) {
            Movie.destroy({
                where: { id }
            })
            res.status(200).json(`Movie with id:${id} deleted`)

        } else {
            res.status(404).json('Movie not found')
        }

    },



}