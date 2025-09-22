const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Joke extends Model {}
    
    Joke.init({
        blague: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize, 
        modelName: 'Joke',
        tableName: 'jokes',
        // Supprimez la ligne "timestamps: false"
    });

    return Joke;
};
