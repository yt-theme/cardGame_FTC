// 背景

import { Canvas_background } from '../../component/canvas_background'

export class Background {
    constructor ({__this__}) {
        this.__this__ = __this__

        // 卡牌选择对象
        let canvasParamsObj = {
            'canvasOption':    __this__.canvasOption, 
            'canvasCtx':       __this__.canvasCtx, 
            'battleCanvasObj': __this__.battleCanvasObj
        }
        this.canvas_background = new Canvas_background(canvasParamsObj)
    }
    init () {
        this.canvas_background.init()
    }
    update () {

    }
    render () {
        this.canvas_background.render()
    }
}