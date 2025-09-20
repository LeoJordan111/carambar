const { Model, DataTypes } = require('sequelize');

// Cette fonction définit le modèle 'Joke' pour Sequelize.
// Le fichier index.js du même dossier va l'appeler pour créer la table dans la base de données.
module.exports = (sequelize) => {
    class Joke extends Model {}
    
    // Initialise le modèle avec les colonnes de la table
    Joke.init({
        // La colonne 'blague' qui stockera le texte de la blague.
        blague: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize, // L'instance de connexion à la base de données
        // Nom de la table dans la base de données
        tableName: 'jokes',
        // Désactive les colonnes createdAt et updatedAt car elles ne sont pas nécessaires ici.
        timestamps: false,
        // Nom du modèle
        modelName: 'Joke'
    });

    return Joke;
};
