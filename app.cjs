// app.cjs
const http = require('http')

if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false })
}

const startServer = async () => {
  const { fastify } = await import('./fastify.conf.js')

  const server = http.createServer((req, res) => {
    fastify.ready((err) => {
      if (err) throw err
      fastify.server.emit('request', req, res)
    })
  })

  if (typeof PhusionPassenger !== 'undefined') {
    // Mode Plesk / Passenger
    server.listen('passenger', () => {
      console.log('✅ Listening on passenger socket')
    })
  } else {
    // Mode local
    const PORT = process.env.PORT || 3000
    const HOST = process.env.HOST || 'localhost'

    server.listen(PORT, HOST, () => {
      console.log(`✅ Listening on http://${HOST}:${PORT}`)
    })
  }
}

startServer()
