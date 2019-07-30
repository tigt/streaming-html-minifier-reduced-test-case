module.exports = (server, opts, done) => {
  server.get('/', (request, reply) => {
    reply.view('index', { some: 'data' })
  })

  done()
}
