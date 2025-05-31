import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get('/', async (req, reply) => {
  return { hello: 'world' }
})

await app.ready()

export default app.server