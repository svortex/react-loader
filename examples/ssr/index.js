const { createElement } = require('react')
const express = require('express')
const { Bar } = require('react-loader')
const { renderToString } = require('react-dom/server')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(createElement(Bar))
  res.send(`
  <!doctype html>
  <html>
  <head>
    <meta charset=utf-8>
    <title></title>
  </head>
  <body>
  ${html}
  </body>
  </html>
  
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
