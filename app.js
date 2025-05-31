import dotenv from 'dotenv'
import Fastify from 'fastify'

dotenv.config()

const app = Fastify({
  logger: true
})

// Exemple de route
app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

console.log('LAUNCHING APP')
// Pour Passenger : exporte l'instance http.Server
await app.ready()
export default app.server