const { Redis_client } = require('../db/redis/redis')

// 生成邀请码
const { CreateInviteCode } = require('./model/createInviteCode')
const { QueryCardJson }    = require('./model/queryCardJson')

module.exports = function (app, router) {
    app.all('*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header('Access-Control-Allow-Credentials', true)
        next()
    })
    app.use('/', router)




// #################### 路由方法 ###################


    // 请求卡牌列表数据
    // 
    router.post('/api/queryCardJson', function(req, res) {
        new QueryCardJson(req, res).post().then((data) => {
            // console.log('user_name', data)
        }).catch((err) => { console.log('createInviteCode err =>', err) })
    })

    // 生成邀请码
    router.post('/api/createInviteCode', function(req, res) {
        new CreateInviteCode(req, res).post().then((data) => {
            // console.log('user_name', data)
        }).catch((err) => { console.log('createInviteCode err =>', err) })
    })
    
}