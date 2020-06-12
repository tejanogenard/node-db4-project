const db = require ("../data/db-config.js")


module.exports = {
    getRecipeas
}

function getRecipeas(){
    return db("recipes")
}