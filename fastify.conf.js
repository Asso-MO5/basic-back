import 'dotenv/config'
import Fastify from 'fastify'


const fastify = Fastify({
  logger: false
})

fastify.get('/', async (req, reply) => {
  return { hello: 'world' }
})

export { fastify }
