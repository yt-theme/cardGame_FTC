let express = require('express')
let router  = express.Router()
let io      = require('socket.io')

let server_router = require('./router/router')
let socket_router = require('./socket/socket')

// 配置文件 => 静态文件目录
let { STATIC_ROUTER, STATIC_DIR, SERVER_PORT, REDIS_CARDINFO } = require('../../config.js')

// mongo
let { Test_model, CardProperty_model } = require('./db/mongodb/mongodb')

// redis
let { Redis_client } = require('./db/redis/redis')

class Server {
    constructor () {
        this.express       = express
        this.router        = router
        this.app           = this.express()
        this.server        = require('http').createServer(this.app)
        this.socket_server = io(this.server)

        // 存储房间名单
        this.roomInfo = {}

        // 初始化服务器
        this.init()
    }

    // 初始化服务器
    init () {
        // 静态文件目录
        this.app.use(STATIC_ROUTER, this.express.static(STATIC_DIR))

        // 将 mongo 中 card_property 所有内容取出 存入 redis
        CardProperty_model().find({}).then((result) => {
            console.log('all card info', result)
            // 存入 redis
            Redis_client.set(REDIS_CARDINFO, JSON.stringify(result), (err, data) => {
                if (err) {
                    console.log('redis set card_property err =>', err)
                    return false
                }
                console.log('redis set card_property succ =>')
                // 查看 redis card_property 数据
                Redis_client.get(REDIS_CARDINFO, (err, res) => {
                    console.log('redis get =>',  res)
                })
            })
        }).catch((err) => { throw err })
    }

    // 启动服务器
    start () {
        let roomInfo      = this.roomInfo,
            socket_server = this.socket_server,
            router        = this.router,
            server        = this.server,
            app           = this.app

        // socket
        socket_router(roomInfo, socket_server)

        // http
        server_router(app, router)

        server.listen(SERVER_PORT, () => {
            console.log('server start =>', SERVER_PORT)
        })
    }
}

module.exports = {
    Server
}