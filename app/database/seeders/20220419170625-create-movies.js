'use strict';

const { Movies, Genre } = require('../../models/index')

module.exports = {
    async up(queryInterface, Sequelize) {

        let genres = [
            { name: 'Marvel Universe' },
            { name: 'Star Wars Universe' },
            { name: 'Animation' }
        ]

        let movies = [{
                title: 'The Avengers',
                image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/07f01ebf958b97063321b094836cfa79688f9e53eb9c25359e1e5826194f9440._RI_V_TTW_.jpg',
                create_date: '2012-05-04',
                qualification: 5,
                genre_id: 1
            },
            {
                title: 'Star Wars I',
                image: 'https://static.wikia.nocookie.net/star-wars-peliculas/images/d/dd/Star-wars-episode-1-i-phantom-menace-movie-poster.jpg/revision/latest?cb=20150126014123&path-prefix=es',
                create_date: '2012-02-10',
                qualification: 4,
                genre_id: 2,
            },
            {
                title: 'Toy Story',
                image: 'https://static.wikia.nocookie.net/doblaje/images/a/a6/Toy_Story_poster.png/revision/latest/top-crop/width/360/height/450?cb=20190621190542&path-prefix=es',
                create_date: '1995-11-19',
                qualification: 3,
                genre_id: 3
            },
            {
                title: 'Iron Man',
                image: 'https://pics.filmaffinity.com/Iron_Man-737725952-large.jpg',
                create_date: '2008-02-05',
                qualification: 5,
                genre_id: 1
            },
        ]

        await queryInterface.bulkInsert('genres', genres, {});
        await queryInterface.bulkInsert('movies', movies, {});

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