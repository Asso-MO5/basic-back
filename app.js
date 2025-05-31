import dotenv from 'dotenv'
import Fastify from 'fastify'

dotenv.config()

const app = Fastify({ logger: true })

app.get('/', async (req, reply) => {
  return { hello: 'world' }
})

await app.ready()

// 👉 Export pour Passenger (Plesk)
export default app.server

// 👉 Si lancé en local (node app.js), on démarre normalement
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000
  app.listen({ port }, err => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    console.log(`🚀 Server listening at http://localhost:${port}`)
  })
}
