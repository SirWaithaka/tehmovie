const Kue = require('kue')
const queue = Kue.createQueue()

queue.process('test', (job, done) => {
  console.log('job data', job.data)
})

module.exports = { Kue, queue }
