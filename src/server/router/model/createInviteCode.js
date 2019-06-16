// 生成邀请码
const queryString = require('querystring')
const uuid = require('uuid')

// redis
const { Redis_client } = require('../../db/redis')

class CreateInviteCode {
    constructor (req, res) {
        this.req = req
        this.res = res
    }
    post () { const req=this.req, res=this.res
        return new Promise ((resolve, reject) => {
            // 请求数据
            let trueData = null
            let currentData = ''
            req.on('data', (data) => {
                currentData += data
                trueData = queryString.parse(currentData)

                // 生成码
                let inviteCode = 'A' + uuid.v1().split('-').join('')

                // 存入 redis
                Redis_client.set(inviteCode, trueData['user_name'], (err, response) => {
                    if (err) { 
                        reject(err)
                    } else {

                        // 设置过期时间 30min过期
                        Redis_client.expire(inviteCode, 1800)

                        // 查看 redis 值
                        Redis_client.get(inviteCode, (err, res) => {
                            console.log('redis get =>', inviteCode + ': ' + res)
                        })
                        
                        // 返回数据
                        res.json({
                            "stat": 1,
                            "data": inviteCode
                        })
        
                        resolve({
                            "user_name": trueData['user_name'],
                            "invite_code": inviteCode
                        })
                    }
                })
            })
        })
    }
}

module.exports = {
    CreateInviteCode
}