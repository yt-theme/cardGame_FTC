// 卡牌选择

import { Canvas_cardPreview, Canvas_cardPreview_card } from '../../component/canvas_cardPreview'

export class CardPreview {
    constructor ({__this__}) {
        this.__this__ = __this__

        // 卡牌选择对象
        let canvasParamsObj = {
            'canvasOption':    __this__.canvasOption, 
            'canvasCtx':       __this__.canvasCtx, 
            'battleCanvasObj': __this__.battleCanvasObj
        }
        this.canvas_cardPreview = new Canvas_cardPreview(canvasParamsObj)
        // 框 内卡牌
        this.canvas_cardPreview_card = new Canvas_cardPreview_card(canvasParamsObj)
    }
    init () {
        this.canvas_cardPreview.init()
        this.canvas_CardPreview_card
    }
    update () {

    }
    render () {
        this.canvas_cardPreview.render()
    }
}