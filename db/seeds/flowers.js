exports.seed = async function (knex) {
  await knex('flowers').del()
  await knex('flowers').insert([
    { id: 1, name: 'Paula', image_id: '1', power_id: ''},
    { id: 2, name: 'Flora', image_id: '3', power_id: ''},
    { id: 3, name: 'Julia', image_id: '5', power_id: ''}
])
}
