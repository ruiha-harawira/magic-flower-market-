const express = require('express')

const db = require('../db/flowers')

const router = express.Router()

//Home page  GET /flowers
router.get('/', (req, res) => {
  db.getAllFlowers()
    .then((flowers) => {
      const viewData = { flowers }
      res.render('flowers', viewData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
