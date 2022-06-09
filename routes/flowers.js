const express = require('express')

const db = require('../db/flowers')

const router = express.Router()

// const viewData = {
//   flowers: [{id:1,
//     name:"flower one",
//     image_url:"/no_power_red.png",
//     power:"fire",
//     description:"this flower makes you highly flammable",
//   }]
// }

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

module.exports = router
