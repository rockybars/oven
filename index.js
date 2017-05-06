const Server = require('http').Server
const server = new Server((req, res) => {
  res.end('OK')
})

module.exports = server
