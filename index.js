const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
const helmet = require('helmet')


server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})
