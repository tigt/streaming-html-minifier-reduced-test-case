'use strict'

const fastify = require('fastify')
const routes = require('./server/routes')
const { views, viewConfig } = require('./server/renderer')

const server = fastify({})

server.register(views, viewConfig)
server.register(routes)

server.ready().then(
  () => console.info('Finished booting, visit http://localhost:8080'),
  err => console.error('Boot failed:', err)
)

server.listen(8080, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }

  server.log.info(`Server listening on ${address}`)
})
