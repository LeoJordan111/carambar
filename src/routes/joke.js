const express = require('express');
const router = express.Router();
const { Joke } = require('../models');

// Route API pour récupérer une blague aléatoire (méthode GET).
router.get('/blague', async (req, res) => {
    try {
        // Récupère toutes les blagues de la base de données
        const jokes = await Joke.findAll();
        
        if (jokes.length > 0) {
            // Sélectionne une blague aléatoire parmi celles qui existent
            const blagueAleatoire = jokes[Math.floor(Math.random() * jokes.length)];
            res.json({ blague: blagueAleatoire.blague });
        } else {
            // Si aucune blague n'est trouvée, renvoie un message d'erreur
            res.status(404).json({ error: "Aucune blague n'a été trouvée." });
        }
    } catch (error) {
        // Gère les erreurs de connexion à la base de données
        res.status(500).json({ error: "Erreur lors de la récupération des blagues." });
    }
});

// Route API pour AJOUTER une nouvelle blague (méthode POST).
router.post('/blague', async (req, res) => {
    try {
        const nouvelleBlague = req.body.blague;
        if (nouvelleBlague) {
            // Crée une nouvelle blague dans la base de données
            const newJoke = await Joke.create({ blague: nouvelleBlague });
            res.status(201).json({ message: 'Blague ajoutée avec succès.', blague: newJoke.blague });
        } else {
            res.status(400).json({ error: 'Le corps de la requête doit contenir une blague.' });
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'ajout de la blague." });
    }
});

module.exports = router;
