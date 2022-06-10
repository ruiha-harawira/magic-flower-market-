const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllFlowers(db = connection) {
  return db('flowers')
  .select()
  .join('images', 'flowers.image_id', 'images.id')
}

function getFlowerById(id, db = connection) { 
  return db('flowers')
    .where('id', id)
    .first()
  .select()
}

function getAllPowers(db = connection) {
return db('powers')
}

function updateFlower(flower, db = connection) {
  return db('flowers')
    .update({
      name: flower.name,
      power_id: flower.power_id
    
  }).where('id', flower.id)
}


module.exports = {
  getAllFlowers,
  getFlowerById,
  getAllPowers,
  updateFlower,
}
