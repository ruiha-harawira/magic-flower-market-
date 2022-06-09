const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllFlowers(db = connection) {
  return db('flowers')
  .select()
  .join('images', 'flowers.image_id', 'images.id')
}

function getFlowerById(db = connection) {}

module.exports = {
  getAllFlowers,
}
