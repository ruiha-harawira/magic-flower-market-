const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllFlowers(db = connection) {
  return db('flowers')
  .select("*", "flowers.name AS flower_name")
  .join('images', 'flowers.image_id', 'images.id')
  .join('powers', 'flowers.power_id', 'powers.id')

}

function getFlowerById(db = connection) {}

module.exports = {
  getAllFlowers,
}
