// app.js
import fastify from './server.js'

const start = async () => {
  try {
    await fastify.ready()
    return fastify.server
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

export default start()
