const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
app.use(serveStatic(__dirname + '/dist'))
const port = process.env.PORT || 3000

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname + '/dist/index.html'))
// )

app.listen(port, () =>
  console.log(`Example app listening at localhost:${port}`)
)
