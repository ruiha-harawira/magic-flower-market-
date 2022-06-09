exports.seed = async function (knex) {
  await knex('powers').del()
  await knex('powers').insert([
    { id: 1, name: 'Sleep Power', description: 'Time stops while you sleep! ONE sleep session only!' },
    { id: 2, name: 'Code Power', description: 'Become a master senior developer with infinite knowledge for ONE hour!'},
    { id: 3, name: 'Bladder Power', description: 'No need to pee for ONE day!' }
  ])
}
