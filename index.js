const server = require('./server')

const port = 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT', port)
})
