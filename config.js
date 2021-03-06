let path = require('path')

module.exports = {
    // 静态文件文件夹 => 绝对路径
    "STATIC_DIR": path.join(__dirname, './src/static'),
    // 静态文件路由
    "STATIC_ROUTER": '/file',

    // 服务器
    "SERVER_URL": '127.0.0.1',
    "SERVER_PORT": 1234,

    // redis
    "REDIS_URL": '0.0.0.0',
    "REDIS_PORT": 6379,
    // 卡牌信息库名
    'REDIS_CARDINFO': 'card_property',
    // 卡牌信息 用户选择后的
    'REDIS_SELECTED_CARDINFO': 'card_selected_property',

    // mongodb
    "MONGODB_URL": 'mongodb://0.0.0.0',
    "MONGODB_PORT": 27017,
    "MONGO_DBNAME": 'cards_game',
    // 卡牌路径地址
    // 魔法牌
    "CARD_STATIC_PATH_MAGIC": `http://127.0.0.1:1234/file/img/magic`,
    // 角色牌
    "CARD_STATIC_PATH_ROLE": `http://127.0.0.1:1234/file/img/role`,
}