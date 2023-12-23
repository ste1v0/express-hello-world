const express = require('express')
const request = require('request')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/rss', (req, res) => {
  request(
    { url: 'https://www.goha.ru/rss/news' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message })
      }
      res.set('Content-Type', 'application/rss+xml')
      res.send(Buffer.from(body))
    }
  )
})


