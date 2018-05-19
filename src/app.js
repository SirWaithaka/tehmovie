const path = require('path')
const express = require('express')
const { Kue, queue } = require('./worker')

const app = express()

app.use('/kue-ui', Kue.app)

app.get('/', (req, res) => {
  res.status(200).send('hello')
})
app.post('/trigger', (req, res) => {
  let job = queue.create('test', {
    title: 'Job ran at ' + Date.now()
  }).save(err => {
    if (!err) console.log(job.id)
  })

  res.status(200).send('Job Done')
})

module.exports = app
