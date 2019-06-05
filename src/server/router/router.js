module.exports = function (app, router) {
    // 房间页面
    router.get('/room/:roomID', function(req, res) {
        let roomID = req.params.roomID
        res.send({
            id: 1,
            name: roomID
        })
    })

    app.use('/', router)
}