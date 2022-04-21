'use strict';

module.exports = {

    // Se ejecuta cuando hacemos la siembra
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        let users = [
            { name: "Ariel", age: 41 },
            { name: "Calel", age: 6 },
            { name: "Romina", age: 40 },
            { name: "Gaston", age: 41 },
        ]

        return await queryInterface.bulkInsert('users', users, {})
    },


    // Se ejecuta cuando se deshace la siembra
    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('users', { age: 41 }, {});

    }
};