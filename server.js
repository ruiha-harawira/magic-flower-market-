const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const flowerRouter = require('./routes/flowers')

// ------ SERVER SETUP ----------------

const server = express()

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// ------ ROUTERS + ROUTES ------------

server.use('/', flowerRouter)

server.get('/', (req, res) => {
  res.redirect('/flowers')
})

module.exports = server
