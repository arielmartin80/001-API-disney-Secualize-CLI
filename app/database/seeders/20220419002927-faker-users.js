'use strict';

const { User } = require('../../models/index')
const faker = require('faker')

module.exports = {
    async up(queryInterface, Sequelize) {

        return Promise.all([

            User.create({
                name: faker.name.findName(),
                age: 41,
            }),

            User.create({
                name: faker.name.findName(),
                age: 6,
            }),

            User.create({
                name: faker.name.findName(),
                age: 32,
            }),

        ])

    },

    async down(queryInterface, Sequelize) {

        return await queryInterface.bulkDelete('users', { age: 32 }, {});

    }
};