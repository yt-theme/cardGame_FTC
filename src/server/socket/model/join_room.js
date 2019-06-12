class Joinroom {
    constructor (obj) {
        // 入参
        this.socket_server = obj.socket_server
        this.socket        = obj.socket
        this.data          = obj.data
        // 设置 battle 状态 和 命令
        // 状态定义 => 0 房间已满 1 等待玩家进入 2 战斗 3 日后再说
        this.msg_stat = 0
        this.msg_data = ''
        this.msg_cmd  = ''

        // data => inviteCode 为房间名
        this.roomID = this.data['inviteCode']
        // 房间内client数量
        this.numberOfClient_inRoom = 0
    }
    
    init () { let socket_server=this.socket_server, socket=this.socket, data=this.data, msg_data=this.msg_data, msg_stat=this.msg_stat, msg_cmd=this.msg_cmd, roomID=this.roomID, numberOfClient_inRoom=this.numberOfClient_inRoom
        console.log('加入房间 =>', data)

        // 如果房间内已有两个客户端连接则不进行加入操作

        // 房间内 client 数量
        try { 
            numberOfClient_inRoom = socket_server.sockets.adapter.rooms[roomID].length
        } catch { 
            numberOfClient_inRoom = 0 
        }

        if (numberOfClient_inRoom === 2) {
            msg_stat = 0 // 房间已满
            msg_data = '房间人满'
            msg_cmd  = '' // 无命令
            console.log(roomID + '房间已满')
        } else {

            // 创建频道
            socket.join(roomID)

            numberOfClient_inRoom = socket_server.sockets.adapter.rooms[roomID].length
            // 对房间内用户发送消息
            socket_server.sockets.in(roomID).emit('logins', '用户加入' + roomID + '房间内玩家数量' + numberOfClient_inRoom)

            
            // 如果 房间内数量小于2 则
            if (numberOfClient_inRoom < 2) {
                msg_stat = 1 // 等待状态
                msg_data = '等待玩家进入'
                msg_cmd  = '' // 无命令
            // 
            } else {
                msg_stat = 2 // 战斗状态
                msg_data = '开始战斗'
                msg_cmd  = 'battle' // 战斗命令
            }
        }
        // 发送允许开战信息 否则发送战斗指令
        socket_server.sockets.in(roomID).emit('systemmsg_battle', {
            stat: msg_stat,
            data: msg_data,
            cmd: msg_cmd
        })
    }
}

module.exports = {
    Joinroom
}