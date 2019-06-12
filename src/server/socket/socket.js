const { Joinroom } = require('./model/join_room')

module.exports = function ( roomInfo, socket_server ) {
        // socket 连接事件
        socket_server.on('connection', (socket) => {

            // 测试登录
            socket.on('test', (name) => {
                socket.emit('logins', {
                    nickname: name,
                    id: socket.id
                })
            })

            // 登录房间
            socket.on('joinroom', (data, callback) => {
                new Joinroom({socket_server, socket, data}).init()
            })

            // console.log('client连接..')
            // let roomID = null

            // // 加入房间 事件
            // socket.on('joinRoom', (data, callback) => {
            //     // data => inviteCode 为房间名
            //     console.log('加入房间 =>', data)
            //     roomID = data['inviteCode']

            //     // 创建频道
            //     socket.join(roomID)
            //     // 对房间内用户发送消息
            //     socket_server.sockets.in(roomID).emit('systemMsg', '用户加入' + roomID)
            //     console.log('socket_server.sockets =>', socket_server.sockets.adapter)

            // })

            // // 接收用户消息 发送相应房间
            // socket.on('sendMsg', (msg, callback) => {
            //     callback({
            //         "stat": 1,
            //         "msg": msg + ': ' + 'ok'
            //     })

            //     // 触发客户端接收消息
            //     socket.emit('receiveMsg', msg)
            //     socket.broadcast.to(roomID).emit('receiveMsg', msg)

            //     // socket_server.to(roomID).emit('msg', user, msg)
            // })

            // 用户离开房间事件
            socket.on('leave', () => {
                socket.leave(roomID)
                console.log('client离开房间', roomID)
            })

            // // 断连事件
            // socket.on('disconnect', function () {
            //     // 将用户从房间移除
            //     // let index = roomInfo[roomID].indexOf(user)
            //     // if (index !== -1) {
            //     //     roomInfo[roomID].splice(index, 1)
            //     // }

            //     // // 用户退出房间
            //     // socket.leave(roomID)
            //     // socket_server.to(roomID).emit('sys', user + '退出了房间', roomInfo[roomID])
            //     // console.log(user + '退出了' + roomID)
            // })
        })
}