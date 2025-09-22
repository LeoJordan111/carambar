const express = require('express');
const router = express.Router();
const { Joke } = require('../models');


router.get('/blague', async (req, res) => {
    try {
        
        const jokes = await Joke.findAll();
        
        if (jokes.length > 0) {
            
            const blagueAleatoire = jokes[Math.floor(Math.random() * jokes.length)];
            res.json({ blague: blagueAleatoire.blague });
        } else {
            
            res.status(404).json({ error: "Aucune blague n'a été trouvée." });
        }
    } catch (error) {
        
        res.status(500).json({ error: "Erreur lors de la récupération des blagues." });
    }
});


router.post('/blague', async (req, res) => {
    try {
        const nouvelleBlague = req.body.blague;
        if (nouvelleBlague) {
            
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
