import { model } from "mongoose";

// 预览框
class Canvas_cardPreview {
    constructor ({canvasOption, canvasCtx, battleCanvasObj}) {
        // canvas 参数
        this.canvasOption    = canvasOption
        // canvas 画布
        this.canvasCtx       = canvasCtx
        // canvas 对象
        this.battleCanvasObj = battleCanvasObj
    }
    init () {
        //  圆角 位置 外框宽高 => 卡牌展示区域
        this.out_arc_r    = 30
        // ------------------------------------------
        this.out_arcLT_x  = this.battleCanvasObj.width*0.1
        this.out_arcLT_y  = this.battleCanvasObj.height*0.1
        this.out_arcLT_s  = Math.PI*1.5
        this.out_arcLT_e  = Math.PI*1
        this.out_arcLT_dr = true // 逆时针
        // ------------------------------------------
        this.out_arcRT_x  = this.battleCanvasObj.width - this.battleCanvasObj.width*0.1
        this.out_arcRT_y  = this.out_arcLT_y
        this.out_arcRT_s  = Math.PI*0
        this.out_arcRT_e  = Math.PI*1.5
        this.out_arcRT_dr = true // 逆时针
        // ------------------------------------------
        this.out_arcRB_x  = this.out_arcRT_x
        this.out_arcRB_y  = this.battleCanvasObj.height - this.battleCanvasObj.height*0.1
        this.out_arcRB_s  = Math.PI*0.5
        this.out_arcRB_e  = Math.PI*0
        this.out_arcRB_dr = true // 逆时针
        // ------------------------------------------
        this.out_arcLB_x  = this.out_arcLT_x
        this.out_arcLB_y  = this.out_arcRB_y
        this.out_arcLB_s  = Math.PI*1
        this.out_arcLB_e  = Math.PI*0.5
        this.out_arcLB_dr = true // 逆时针

        // 外 线
        this.out_lineT_x_s = this.out_arcRT_x + this.out_arc_r
        this.out_lineT_y_s = this.out_arcRT_y - this.out_arc_r
        this.out_lineT_x_e = this.out_arcRT_x - this.out_arc_r
        this.out_lineT_y_e = this.out_arcRT_y - this.out_arc_r
        // ------------------------------------------
        this.out_lineR_x_s = this.out_arcRB_x + this.out_arc_r
        this.out_lineR_y_s = this.out_arcRB_y - this.out_arc_r
        this.out_lineR_x_e = this.out_arcRT_x + this.out_arc_r
        this.out_lineR_y_e = this.out_arcRT_y + this.out_arc_r
        // ------------------------------------------
        this.out_lineB_x_s = this.out_arcLB_x + this.out_arc_r
        this.out_lineB_y_s = this.out_arcLB_y + this.out_arc_r
        this.out_lineB_x_e = this.out_arcRB_x - this.out_arc_r
        this.out_lineB_y_e = this.out_arcRB_y + this.out_arc_r
        // ------------------------------------------
        this.out_lineL_x_s = this.out_arcLT_x - this.out_arc_r
        this.out_lineL_y_s = this.out_arcLT_y + this.out_arc_r
        this.out_lineL_x_e = this.out_arcLB_x - this.out_arc_r
        this.out_lineL_y_e = this.out_arcLB_y - this.out_arc_r

        // this.render()
    }
    render () { let ctx = this.canvasCtx
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(this.out_lineL_x_s, this.out_lineL_y_s)
        ctx.lineTo(this.out_lineL_x_e, this.out_lineL_y_e)
        ctx.arc(this.out_arcLB_x, this.out_arcLB_y, this.out_arc_r, this.out_arcLB_s, this.out_arcLB_e, this.out_arcLB_dr)
        ctx.lineTo(this.out_lineB_x_e, this.out_lineB_y_e)
        ctx.arc(this.out_arcRB_x, this.out_arcRB_y, this.out_arc_r, this.out_arcRB_s, this.out_arcRB_e, this.out_arcRB_dr)
        ctx.lineTo(this.out_lineR_x_e, this.out_lineR_y_e)
        ctx.arc(this.out_arcRT_x, this.out_arcRT_y, this.out_arc_r, this.out_arcRT_s, this.out_arcRT_e, this.out_arcRT_dr)
        ctx.lineTo(this.out_lineT_x_e, this.out_lineT_y_e)
        ctx.arc(this.out_arcLT_x, this.out_arcLT_y, this.out_arc_r, this.out_arcLT_s, this.out_arcLT_e, this.out_arcLT_dr)
       
        ctx.closePath()
        // ctx.shadowBlur = '2'
        // ctx.shadowOffsetX = '3'
        // ctx.shadowOffsetY = '3'
        // ctx.shadowColor = 'rgb(22, 28, 36)'
        ctx.strokeStyle = 'rgb(50, 96, 165)'
        ctx.lineWidth = '6'
        ctx.stroke()
        ctx.fillStyle = 'rgb(8, 38, 84)'
        ctx.fill()
        ctx.restore()
    }
}

// 框 内卡牌
class Canvas_cardPreview_card extends Canvas_cardPreview {
    constructor ({canvasOption, canvasCtx, battleCanvasObj}) {
        super({canvasOption, canvasCtx, battleCanvasObj})
        // alert(super.canvasCtx)
    }
    // init () {
    //     alert(super.init())
    // }
}

export {
    Canvas_cardPreview,
    Canvas_cardPreview_card
}