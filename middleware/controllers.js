const fs = require('fs')
const path = require('path')

// add exist function to router map
const addMapping = (router, mapping) => {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      // function method is GET
      const path = url.substring(4)
      // register method
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      // function method is POST
      const path = url.substring(5)
      // register method
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

// add controller to router
const addControllers = (router, dir) => {
  fs.readdirSync(path.join(process.cwd(), dir)).filter((f) => {
    return f.endsWith('.js')
  }).forEach((f) => {
    console.log(`process controller: ${f}...`)
    const mapping = require(path.join(process.cwd(), dir, f))
    addMapping(router, mapping)
  })
}

module.exports = (dir) => {
  const controllerDir = dir || 'controllers'
  // koa-router returns a function
  const router = require('koa-router')() // IIFE!!!! important

  addControllers(router, controllerDir)
  return router.routes()
}
