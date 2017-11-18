let split = require(`split`)
let through = require(`through2`)
let request = require(`request`)
let atob = require(`atob`)

module.exports = onProxyV2 = async (req, res) => {
  let attributes
  request(`${decodeURIComponent(req.params.proxy)}`)
    .on(`end`, function () {
      console.log(attributes)
    })
    .pipe(split())
    .pipe(through(function (line, _, next) {
      let obj
      if (!attributes) {
        attributes = line.toString().split(`,`)
      }
      obj = line.toString().split(`,`)
      obj = obj.reduce((a, b, i) => {
        let x = { ...a }
        x[attributes[i]] = b
        return { ...x }
      }, {})
      this.push(JSON.stringify(obj))
      next()
    }))
    .pipe(through(function (json, _, next) {
      this.push(`${json}\n`)
      next()
    }))
    .pipe(res)
}