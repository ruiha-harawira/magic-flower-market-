const express = require('express')

const db = require('../db/flowers')

const router = express.Router()

//Home page  GET /
router.get('/', (req, res) => {
// res.render('home', viewData)

  db.getAllFlowers()
    .then((flowers) => {
      const viewData = { flowers }
      console.log('viewData', viewData)
      res.render('home', viewData)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
  })

//Edit page Get /:id/edit
// router.get('/', (req, res) => {
//   const id = Number(req.params.id)

//   db.getFlowerById(id).then((flower) => {
//     db.getAllpowers
//   })
// })

// router.get('/id:/edit', (req, res) => {
//   const id = Number(req.params.id) 

//   return db
//     .getFlowerById(id)
//     .then((flower) => {
//       db.getAllPowers()
//         .then((powers) => {
//           const viewData = { flower, powers }
//           res.render('edit', viewData)
//         })
//         .catch((err) => {
//           res.status(500).send(err.message)
//         })
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// } )

module.exports = router
