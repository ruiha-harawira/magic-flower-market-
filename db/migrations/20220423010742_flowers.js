exports.up = function (knex) {
  return knex.schema.createTable('flowers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('image_id')
    table.integer('power_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('flowers')
}
