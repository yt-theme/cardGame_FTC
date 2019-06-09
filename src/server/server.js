let express = require('express')
let router  = express.Router()
let io      = require('socket.io')

let server_router = require('./router/router')
let socket_router = require('./socket/socket')

// 配置文件 => 静态文件目录
let { STATIC_DIR, SERVER_PORT } = require('../../config.js')

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
        this.app.use('/file', this.express.static(STATIC_DIR))
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