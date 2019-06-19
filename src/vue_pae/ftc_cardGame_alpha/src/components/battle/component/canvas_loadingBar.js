export class Canvas_loadingBar {
    constructor ({canvasOption, canvasCtx, battleCanvasObj}) {
        // canvas 参数
        this.canvasOption    = canvasOption
        // canvas 画布
        this.canvasCtx       = canvasCtx
        // canvas 对象
        this.battleCanvasObj = battleCanvasObj

        // 进度条 百分比 初始值
        this.progressPrecent = 0
        
        this.init()
    }
    // 初始化参数
    init (progress) {
        // 百分比
        this.progressPrecent = progress

        // canvas 画布宽 高
        this.canva_w       = this.battleCanvasObj.width 
        this.canva_h       = this.battleCanvasObj.height

        // bar 主体位置
        this.barPosition_x = this.canva_w/2 - this.canva_w/4
        this.barPosition_y = this.canva_h*0.8
        // bar 主体长宽
        this.barWidth      = this.canva_w/2
        this.barHeight     = 30
        // 左右 圆角 位置
        this.left_circ_x   = this.barPosition_x + 1
        this.left_circ_y   = this.barPosition_y + this.barHeight/2
        this.right_circ_x  = this.barPosition_x + this.barWidth - 1
        this.right_circ_y  = this.left_circ_y
        // 左右 圆角 半径
        this.left_circ_r   = this.barHeight/2
        this.right_circ_r  = this.left_circ_r
        // 左右 圆角 起始 && 结束角
        this.left_circ_s   = Math.PI*1.5
        this.left_circ_e   = Math.PI*0.5
        this.right_circ_s  = Math.PI*1.5
        this.right_circ_e  = Math.PI*0.5
        // 左右 圆角 绘图方向
        this.left_circ_dr  = true // 逆时针
        this.right_circ_dr = false // 顺时针    

        // 内进度条 起点 坐标
        this.inner_posi_x  = this.barPosition_x + 2
        this.inner_posi_y  = this.barPosition_y + 3
        // 内进度条 终点坐标 最大值
        this.inner_Max_x   = this.barPosition_x + this.barHeight - 2
        // 内进度条 宽 初始化为 0 高
        this.inner_w       = (this.progressPrecent/100 * this.barWidth) >= this.barWidth ? this.barWidth : (this.progressPrecent/100 * this.barWidth)
        this.inner_h       = this.barHeight - 3 - 3

        // 内进度条 左右 圆角 位置
        this.inner_circL_x = this.barPosition_x + 3
        this.inner_circL_y = this.barPosition_y + this.barHeight/2
        this.inner_circR_x = this.barPosition_x + this.inner_w
        this.inner_circR_y = this.inner_circL_y
        // 内进度条 左右 圆角 半径
        this.inner_circL_r = this.barHeight/2 - 3
        this.inner_circR_r = this.inner_circL_r
        // 内进度条 左右 起始 && 结束角
        this.inner_circL_s = this.left_circ_s
        this.inner_circL_e = this.left_circ_e
        this.inner_circR_s = this.right_circ_s
        this.inner_circR_e = this.right_circ_e
        // 内进度条 圆角 绘图方向
        this.inner_cirL_dr = true // 逆时针
        this.inner_cirR_dr = false // 顺时针

        this.render()
    }
    render () { let ctx = this.canvasCtx
        // 设置进度条百分比
        // 外框
        ctx.fillStyle = "rgb(50, 96, 165)"
        ctx.fillRect(this.barPosition_x, this.barPosition_y, this.barWidth, this.barHeight)
        // 外框 圆角 左
        ctx.fillStyle = "rgb(50, 96, 165)"
        ctx.beginPath()
        ctx.arc(this.left_circ_x, this.left_circ_y, this.left_circ_r, this.left_circ_s, this.left_circ_e, this.left_circ_dr)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.right_circ_x, this.right_circ_y, this.right_circ_r, this.right_circ_s, this.right_circ_e, this.right_circ_dr)
        ctx.closePath()
        ctx.fill()

        // 内进度条
        ctx.fillStyle = "rgb(128, 166, 223)"
        ctx.fillRect(this.inner_posi_x, this.inner_posi_y, this.inner_w, this.inner_h)
        // 圆角
        ctx.fillStyle = "rgb(128, 166, 223)"
        ctx.beginPath()
        ctx.arc(this.inner_circL_x, this.inner_circL_y, this.inner_circL_r, this.inner_circL_s, this.inner_circL_e, this.inner_cirL_dr)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.inner_circR_x, this.inner_circR_y, this.inner_circR_r, this.inner_circL_s, this.inner_circL_e, this.inner_cirR_dr)
        ctx.closePath()
        ctx.fill()
    }
    flash () {

    }
}