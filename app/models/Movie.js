'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Movie.belongsTo(models.Genre, { foreignKey: 'genre_id' })
            Movie.belongsToMany(models.Character, { through: 'char_movie' })
        }
    }
    Movie.init({
        title: DataTypes.STRING,
        image: DataTypes.STRING,
        create_date: DataTypes.DATEONLY,
        qualification: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Movie',
    });

    return Movie;
};