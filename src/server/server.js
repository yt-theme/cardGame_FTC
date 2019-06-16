let express = require('express')
let router  = express.Router()
let io      = require('socket.io')

let server_router = require('./router/router')
let socket_router = require('./socket/socket')

// 配置文件 => 静态文件目录
let { STATIC_DIR, SERVER_PORT } = require('../../config.js')

// mongo
let { Test_model, CardProperty_model } = require('./db/mongodb')

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
        // 初始化 mongodb
        // Test_model().insert({'name': '222222222', 'text': 'wqrfaw4ef'}).then((result) => {

        //     Test_model().updateMany({"name": "222222222"}, {$set:{"name": "111"}}).then((result) => {

        //         Test_model().find({}, (result) => {

        //         }).catch((err) => { throw err })

        //     }).catch((err) => { throw err })

        // }).catch((err) => { throw err })
        CardProperty_model().insert({
            id: 'FURRY001/2019.07',
            img_name: '1.jpg',
            img_url: 'http://127.0.0.1:1234/file/img/1.jpg',

            skill_first_text: '野外生存',
            skill_first_consume_type: 7,
            skill_first_consume: 1,
            skill_first_damage: 0,

            skill_second_text: '星辰之跃',
            skill_second_consume_type: 3,
            skill_second_consume: 3,
            skill_second_damage: 20,

            health: 80,
            role_property: 3,
            recall_assault_consume: 2,
            weakness: 5,
            rsistance: 4
        })
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