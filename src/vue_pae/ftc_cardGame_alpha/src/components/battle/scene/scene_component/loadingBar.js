// 进度条 init 异步

import { Canvas_loadingBar } from '../../component/canvas_loadingBar'
import { Canvas_background } from '../../component/canvas_background'

export class LoadingBar {
    constructor ({__this__}) {
        this.__this__ = __this__
        // canvas 需要传的参数
        let canvasParamsObj = {
            'canvasOption':    __this__.canvasOption, 
            'canvasCtx':       __this__.canvasCtx, 
            'battleCanvasObj': __this__.battleCanvasObj
        }
        // 进度条
        this.CANVAS_loadingBar  = new Canvas_loadingBar(canvasParamsObj)
        // 背景
        this.CANVAS_background  = new Canvas_background(canvasParamsObj) 
    }
    
    init () { let self=this, __this__=self.__this__
        return new Promise ((resolve, reject) => {
            let cardImg_obj        = {}
            let cardImg_onloadAmount = 0
            let cardDataList_lenth   = __this__.$store.state.cardDataList.length

            __this__.$store.state.cardDataList.forEach((ite) => {
                cardImg_obj[ite['img_name']]     = new Image()
                cardImg_obj[ite['img_name']].src = ite['img_url']
                cardImg_obj[ite['img_name']].onload = () => {
                    cardImg_onloadAmount += 1

                    // 清空背景
                    __this__.canvasCtx.clearRect(0, 0, __this__.canvasOption.w, __this__.canvasOption.h)
                    // 绘制背景
                    self.CANVAS_background.init()
                    self.CANVAS_background.render()
                    // 进度条显示进度
                    self.CANVAS_loadingBar.init(cardImg_onloadAmount/cardDataList_lenth*100)

                    // 如果 加载的图片跟 数组长度相同 则认定为加载完成
                    if (cardImg_onloadAmount === cardDataList_lenth) {
                        // // 执行主动画方法
                        // canvasRenderFunc()
                        // 将 卡牌图片数据放进 store
                        __this__.$store.dispatch('set_loaded_cardImageData', cardImg_obj)
                        resolve(true)
                    }
                }
            })
        })
    }
}