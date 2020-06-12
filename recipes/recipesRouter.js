const express = require('express')
const recipeas = require('./recipesModel.js')

const router = express.Router()


router.get('/', (req,res) => {
    recipeas.getRecipeas()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes.' });
    });
})

module.exports = router