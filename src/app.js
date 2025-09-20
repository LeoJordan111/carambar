const express = require('express');
const app = express();
const path = require('path');

// Middleware pour analyser le corps des requêtes en JSON.
// Indispensable pour que le routeur des blagues puisse lire les requêtes POST.
app.use(express.json());

// Middleware pour servir les fichiers statiques (HTML, CSS, JS client)
// Cela permet à votre site web de s'afficher.
app.use(express.static('public'));

// Monte le routeur des blagues.
// Toutes les routes définies dans 'blagues.js' sont maintenant accessibles
// sous le préfixe /api. Par exemple, /api/blague.
app.use('/api', require('./routes/joke'));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

