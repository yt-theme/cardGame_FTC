let path = require('path')

module.exports = {
    // 静态文件文件夹 => 绝对路径
    "STATIC_DIR": path.join(__dirname, './src/static'),

    // 服务器
    "SERVER_URL": '127.0.0.1',
    "SERVER_PORT": 1234,

    // redis
    "REDIS_URL": '0.0.0.0',
    "REDIS_PORT": 6379,
    // 卡片牌信息库名
    'REDIS_CARDINFO': 'card_property',

    // mongodb
    "MONGODB_URL": 'mongodb://0.0.0.0',
    "MONGODB_PORT": 27017,
    "MONGO_DBNAME": 'cards_game'
}