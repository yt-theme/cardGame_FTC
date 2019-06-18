export class Canvas_sample {
    constructor ({canvasOption, canvasCtx, battleCanvasObj}) {
        // canvas 参数
        this.canvasOption    = canvasOption
        // canvas 画布
        this.canvasCtx       = canvasCtx
        // canvas 对象
        this.battleCanvasObj = battleCanvasObj
    }
    draw () {
        this.canvasCtx.fillStyle = "rgb(200,0,0)"
        this.canvasCtx.fillReat(10, 10, 55, 50)

        this.canvasCtx.fillStyle = "rgba(0, 0, 200, 0.5)"
        this.canvasCtx.fillReat(30, 30, 55, 50)
    }
}