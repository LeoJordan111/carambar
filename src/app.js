const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());


app.use(express.static('public'));


app.use('/api', require('./routes/joke'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

