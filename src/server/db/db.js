const redis = require('redis')
const Redis_client = redis.createClient('6379', '0.0.0.0')

Redis_client.on('error', (error) => {
    console.log('redis err =>', error)
})

module.exports = {
    Redis_client
}