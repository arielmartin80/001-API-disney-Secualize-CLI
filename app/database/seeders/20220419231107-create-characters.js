'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        const characters = [{
                name: 'Tony Stark',
                image: 'https://holatelcel.com/wp-content/uploads/2020/07/marvel-1.png',
                age: 53,
                weight: 102,
                history: 'Anthony Edward "Tony" Stark fue un multimillonario industrial, anterior Director General de Industrias Stark y miembro fundador de los Vengadores. Siendo el hijo de Howard Stark y poseyendo un gran intelecto, Stark se volvió un inventor de armas mundialmente reconocido'
            },
            {
                name: 'Woody',
                image: 'https://static.wikia.nocookie.net/disney/images/2/22/Profile_-_Woody.jpeg/revision/latest?cb=20200711052417',
                age: 70,
                weight: 1,
                history: 'Woody es un juguete leal que ha sido el juguete favorito de Andy desde la guardería. Es determinado, apasionado, y haría cualquier cosa por sus amigos más queridos y cercanos. Considera cada uno de los juguetes como una familia y hace todo lo posible para mantener a su familia unida en todo momento.'
            },
            {
                name: 'Anakin Skywalker',
                image: 'https://static.wikia.nocookie.net/esstarwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20160226204939',
                age: 25,
                weight: 84,
                history: 'Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe Sin Miedo..'
            },
        ]

        const char_movie = [
            { character_id: 1, movie_id: 1 },
            { character_id: 1, movie_id: 4 },
            { character_id: 2, movie_id: 3 },
            { character_id: 3, movie_id: 2 },
        ]

        await queryInterface.bulkInsert('characters', characters, {});
        await queryInterface.bulkInsert('char_movie', char_movie, {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};