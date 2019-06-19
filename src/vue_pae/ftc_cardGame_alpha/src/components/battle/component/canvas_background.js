// 设置 canvas 背景色
export class Canvas_background {
    constructor ({canvasOption, canvasCtx, battleCanvasObj}) {
        // canvas 参数
        this.canvasOption    = canvasOption
        // canvas 画布
        this.canvasCtx       = canvasCtx
        // canvas 对象
        this.battleCanvasObj = battleCanvasObj
    }

    init () {
        this.canvasCtx.fillStyle = '#0b3469'  
        this.canvasCtx.fillRect(0, 0, this.battleCanvasObj.width , this.battleCanvasObj.height)
    }
}