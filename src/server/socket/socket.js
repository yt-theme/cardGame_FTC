module.exports = function ( roomInfo, socket_server ) {
        // socket 连接事件
        socket_server.on('connection', (socket) => {
            let url = socket.request.header.referer
            let splited = url.split('/')
            // 房间ID
            let roomID = splited[splited.length - 1]
            let user = ''

            // 加入房间事件
            socket.on('join', (userName) => {
                user = userName

                // 将用户加入房间名单
                if (!roomInfo[roomID]) {
                    // 房间存储用户的数组
                    roomInfo[roomID] = []
                }
                // 将用户存入房间
                roomInfo[roomID].push(user)

                // 用户加入房间
                socket.join(roomID)
                // 通知房间内人员
                socket_server.to(roomID).emit('sys', user + '加入了房间', roomInfo[roomID])
                console.log(user + '加入了' + roomID)
            })

            // 用户离开房间事件
            socket.on('leave', () => {
                socket.emit('disconnect')
            })

            // 断连事件
            socket.on('disconnect', function () {
                // 将用户从房间移除
                let index = roomInfo[roomID].indexOf(user)
                if (index !== -1) {
                    roomInfo[roomID].splice(index, 1)
                }

                // 用户退出房间
                socket.leave(roomID)
                socket_server.to(roomID).emit('sys', user + '退出了房间', roomInfo[roomID])
                console.log(user + '退出了' + roomID)
            })

            // 接收用户消息 发送相应房间
            socket.on('message', (msg) => {
                // 如果用户不存在房间则不发送
                if (roomInfo[roomID].indexOf(user) === -1) {
                    return false
                }
                socket_server.to(roomID).emit('msg', user, msg)
            })
        })
}