const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // La classe Joke étend la classe Model de Sequelize
    class Joke extends Model {}
    
    // Initialisation du modèle avec la définition des colonnes de la table
    Joke.init({
        // La colonne 'blague' pour stocker le texte de la blague
        blague: {
            type: DataTypes.STRING, // Le type de la colonne est une chaîne de caractères
            allowNull: false // La colonne ne peut pas être vide
        }
    }, {
        sequelize, // L'instance de connexion à la base de données
        modelName: 'Joke', // Le nom du modèle
        tableName: 'jokes', // Le nom de la table dans la base de données
        timestamps: false // Désactive les colonnes createdAt et updatedAt
    });

    return Joke;
};