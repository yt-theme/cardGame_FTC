let path = require('path')

module.exports = {
    // 静态文件文件夹 => 绝对路径
    "STATIC_DIR": path.join(__dirname, './src/static'),

    // 服务器地址
    "SERVER_URL": '127.0.0.1',
    // 服务器端口
    "SERVER_PORT": 1234
}