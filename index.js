const Server = require('http').Server
const server = new Server((req, res) => {
  res.end(req.url)
})

module.exports = server
