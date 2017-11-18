let express = require(`express`)

let onProxyV2 = require(`./on-proxy-v2.js`)
let onProxy = require(`./on-proxy.js`)

let app = express()

app.use(function (req, res, next) {
  res.header(`Access-Control-Allow-Origin`, `*`)
  next()
})

app.get(`/v2/proxy/json/:proxy`, onProxyV2)
app.get(`/proxy/:proxy`, onProxy)

app.listen(9002)