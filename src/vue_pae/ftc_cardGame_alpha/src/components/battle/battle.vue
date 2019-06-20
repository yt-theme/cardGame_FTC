<template>
    <div class="home_battleLogin_container">
       <!-- canvas -->
        <canvas ref="battleVisual"></canvas>
    </div>
</template>

<script>
import { api_createInviteCode } from '@/lib/api.js'
import { querySession, updateSession } from '@/lib/utils.js'

// canvas
import { canvas_circle } from './component/canvas_circle'
import { Canvas_background } from './component/canvas_background'
import { Canvas_sample } from './component/canvas_sample'
import { Canvas_loadingBar } from './component/canvas_loadingBar'
import { Canvas_cardPreview } from './component/canvas_cardPreview'

export default {
    data () {
        return {
            inviteCode: '',

            // canvas obj
            battleCanvasObj: null,
            // canvas ctx
            canvasCtx: null,
            // canvas 定时器
            canvasTimer: null,

            // canvas各种配置选项
            canvasOption: {
                circle_x: 0
            }
        }
    },
    watch: {
        '$route' () {
            
        }
    },
    methods: {
        // 初始化 canvas
        canvas_init () {
            // canvas 对象
            this.battleCanvasObj        = this.$refs.battleVisual
            this.battleCanvasObj.width  = document.body.clientWidth
            this.battleCanvasObj.height = document.body.clientHeight - 3
           
            // 设置 canvas 属性 
            // canvas ctx
            this.canvasCtx = this.battleCanvasObj.getContext('2d')
            
        },
    },
    mounted () {
        // canvas 初始化
        this.canvas_init()
        let canvasOption    = this.canvasOption
        let canvasCtx       = this.canvasCtx
        let battleCanvasObj = this.battleCanvasObj
        let w = document.body.clientWidth
        let h = document.body.clientHeight - 3

        // canvas func
        // 背景
        // 绘制背景
        let CANVAS_background  = new Canvas_background({canvasOption, canvasCtx, battleCanvasObj})
        // 加载进度条
        let CANVAS_loadingBar  = new Canvas_loadingBar({canvasOption, canvasCtx, battleCanvasObj})
        // 卡牌预览
        let CANVAS_cardPreview = new Canvas_cardPreview({canvasOption, canvasCtx, battleCanvasObj})

        // ############################### 加载资源 ########################
        // 加载图片资源
        let cardImg_obj        = {}
        let cardImg_onloadAmount = 0
        let cardDataList_lenth   = this.$store.state.cardDataList.length
        this.$store.state.cardDataList.forEach((ite) => {
            cardImg_obj[ite['img_name']]     = new Image()
            cardImg_obj[ite['img_name']].src = ite['img_url']
            cardImg_obj[ite['img_name']].onload = () => {
                cardImg_onloadAmount += 1
                // 进度条显示进度
                // 绘制背景
                this.canvasCtx.clearRect(0, 0, w, h)
                CANVAS_background.init()
                CANVAS_loadingBar.init(cardImg_onloadAmount/cardDataList_lenth*100)
                // 如果 加载的图片跟 数组长度相同 则认定为加载完成
                if (cardImg_onloadAmount === cardDataList_lenth) {
                    // 执行主动画方法
                    canvasRenderFunc()
                }
            }
        })

        // ################################ 动画相关 #######################
        // 主动画方法
        let canvasRenderFunc = () => {
            this.canvasTimer = setInterval(() => {
                this.canvasCtx.clearRect(0, 0, w, h)
                // 绘制背景
                CANVAS_background.init()
                // 绘制图片展示
                CANVAS_cardPreview.init()
            }, 60/1000)
        }
    },
    destroyed () {
        this.leave()
        this.canvasTimer = null
    },
    sockets: {
        // 退出房间
        leave () {

        }
    }
}
</script>

<style scoped>
.home_battleLogin_container {
    width: 100vw;
    height: 100vh;
}
</style>
