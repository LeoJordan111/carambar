const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API !');
});

module.exports = router;