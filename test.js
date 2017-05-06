const test = require('tape')
const server = require('./')
const request = require('tarik')

function listen () {
  return new Promise(function (resolve, reject) {
    server.listen(function (err) {
      if (err) {
        return reject(err)
      }
      resolve(server.address())
    })
  })
}

function close () {
  server.close()
}

test('ok to listen', function (t) {
  listen()
    .then(function ({port}) {
      return request(`http://localhost:${port}`)
    })
    .then(function ({statusCode, body}) {
      t.equal(statusCode, 200)
      t.equal(body, 'OK')
      close()
      t.end()
    })
})
