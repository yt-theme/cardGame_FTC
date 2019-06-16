// 查卡牌列表

// 生成邀请码
const queryString = require('querystring')

// redis
const { Redis_client } = require('../../db/redis')

// 配置文件
const { REDIS_CARDINFO } = require('../../../../config')

class QueryCardJson {
    constructor (req, res) {
        this.req = req
        this.res = res
    }
    post () { const req=this.req, res=this.res
        return new Promise ((resolve, reject) => {
            // 检索 redis 中 card_property
            Redis_client.get(REDIS_CARDINFO, (err, result) => {
                if (err) {
                    console.log('检索 redis ', REDIS_CARDINFO, 'err =>', err)
                    reject(err)
                    return false
                }
                // 返回数据
                res.json({
                    "stat": 1,
                    "data": result
                })
                resolve(true)
            })
        })
    }
}

module.exports = {
    QueryCardJson
}