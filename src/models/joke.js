const express = require('express');
const router = express.Router();
const { Joke } = require('../models');

// Route API pour récupérer une blague aléatoire (méthode GET).
router.get('/blague', async (req, res) => {
    try {
        // Récupère toutes les blagues de la base de données.
        const blagues = await Joke.findAll();
        
        if (blagues.length > 0) {
            // S'il y a des blagues, en choisir une au hasard.
            const blagueAleatoire = blagues[Math.floor(Math.random() * blagues.length)];
            res.json({ blague: blagueAleatoire.blague });
        } else {
            // S'il n'y a pas de blagues, envoyer un message approprié.
            res.status(404).json({ error: "Aucune blague trouvée dans la base de données." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des blagues:", error);
        res.status(500).json({ error: "Une erreur est survenue sur le serveur." });
    }
});

// Route API pour AJOUTER une nouvelle blague (méthode POST).
router.post('/blague', async (req, res) => {
    const nouvelleBlague = req.body.blague;
    
    if (nouvelleBlague) {
        try {
            // Crée une nouvelle entrée dans la table 'jokes' avec la blague.
            await Joke.create({ blague: nouvelleBlague });
            res.status(201).json({ message: 'Blague ajoutée avec succès.' });
        } catch (error) {
            console.error("Erreur lors de l'ajout de la blague:", error);
            res.status(500).json({ error: "Une erreur est survenue sur le serveur." });
        }
    } else {
        res.status(400).json({ error: 'Le corps de la requête doit contenir une blague.' });
    }
});

module.exports = router;
