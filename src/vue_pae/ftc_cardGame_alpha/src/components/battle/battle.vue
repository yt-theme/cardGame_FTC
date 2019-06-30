<template>
    <div class="battle_container">
       <!-- canvas -->
        <canvas ref="battleVisual"></canvas>

        <!-- 卡牌选择框 -->
        <BattleCardSelector
            :card_data_list="card_data_list"
            :battle_cardSelector_show="battle_cardSelector_show"
            @prepared="cardSelected_ok"
        ></BattleCardSelector>
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

// 场景管理器
import { Scene_manager } from './scene/sceneManager'

// 卡牌选择框
import BattleCardSelector from './component/battle_cardSelector/battle_cardSelector'

export default {
    components: {
        // 卡牌选择框
        BattleCardSelector
    },
    data () {
        return {
            // 卡牌选择框显示
            battle_cardSelector_show: false,

            inviteCode: '',
            
            // canvas obj
            battleCanvasObj: null,
            // canvas ctx
            canvasCtx: null,
            // canvas 定时器
            canvasTimer: null,

            // 场景
            sceneObj: null,

            // canvas各种配置选项
            canvasOption: {
                circle_x: 0,
                // document.body w h
                w: 0,
                h:0
            }
        }
    },
    watch: {
        '$route' () {
            
        },
    },
    computed: {
        card_data_list () {
            return this.$store.state.cardDataList
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

        // --------------------------------------------------
        // 卡牌选择框选择完毕事件
        cardSelected_ok (val) {
            console.log('cardselected ok =>', val)
        }
        // --------------------------------------------------
    },
    mounted () {
        // canvas 初始化
        let self = this
        self.canvas_init()
        let canvasOption    = this.canvasOption
        let canvasCtx       = this.canvasCtx
        let battleCanvasObj = this.battleCanvasObj

        this.canvasOption.w = document.body.clientWidth
        this.canvasOption.h = document.body.clientHeight - 3

        // ################################ 场景管理器 #######################
        self.sceneObj = new Scene_manager({
            '__this__': self
        })

        // 加载资源
        self.sceneObj.loading_sence().then((v) => {
            cardSelector()
            // 加载完毕进行主循环
            // canvasRenderFunc()
        }).catch((err) => { })

        // ################################ 卡牌选择框 #######################
        // 卡牌选择
        function cardSelector () {
            // 卡牌选择框显示
            self.battle_cardSelector_show = true
        }

        // ################################ 主动画方法 #######################
        function canvasRenderFunc () {
            self.canvasTimer = setInterval(() => {
                // canvasCtx.clearRect(0, 0, canvasOption.w, canvasOption.h)

                // self.sceneObj.render()

                // // 绘制背景
                // CANVAS_background.init()
                // // 绘制图片展示
                // CANVAS_cardPreview.init()
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
small {
    font-size: 18px;
}
.battle_container {
    position: relative;
    width: 100vw;
    height: 100vh;
}
</style>
