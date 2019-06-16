const { REDIS_URL, REDIS_PORT} = require('../../../config')
// redis
const Redis_client    = require('redis').createClient(REDIS_PORT, REDIS_URL)


// ############# redis ###########
Redis_client.on('error', (error) => {
    console.log('redis err =>', error)
})



module.exports = {
    Redis_client
}