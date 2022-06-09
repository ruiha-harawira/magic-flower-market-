exports.seed = async function (knex) {
  await knex('images').del()
  await knex('images').insert([
    { id: 1, image: '/no_power_red.png' },
    { id: 2, image: '/power_red.png' },
    { id: 3, image: '/no_power_yellow.png' },
    { id: 4, image: '/power_yellow.png' },
    { id: 5, image: '/no_power_purple.png' },
    { id: 6, image: '/power_purple.png' }
  ])
}
