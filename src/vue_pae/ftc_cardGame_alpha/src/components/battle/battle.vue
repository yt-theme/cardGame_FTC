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
import { canvas_background } from './component/canvas_background'

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
        // 退出房间
        leave_room () {
            this.$socket.emit('leave')
        },
        
        // 初始化 canvas
        canvas_init () {
            // canvas 对象
            this.battleCanvasObj        = this.$refs.battleVisual
            this.battleCanvasObj.width  = document.body.clientWidth
            this.battleCanvasObj.height = document.body.clientHeight - 3
           
            // 设置 canvas 属性 
            // canvas ctx
            this.canvasCtx = this.battleCanvasObj.getContext('2d')
            
        }
    },
    mounted () {
        // canvas 初始化
        this.canvas_init()

        this.canvasTimer = setInterval(() => {
            let canvasOption    = this.canvasOption
            let canvasCtx       = this.canvasCtx
            let battleCanvasObj = this.battleCanvasObj
            let w = document.body.clientWidth
            let h = document.body.clientHeight - 3
            this.canvasCtx.clearRect(0, 0, w, h)

            // 绘制背景
            new canvas_background({canvasOption, canvasCtx, battleCanvasObj}).render()
            new canvas_circle({w, canvasOption, canvasCtx})

        }, 20)
    },
    destory () {
        this.leave_room()
        this.canvasTimer = null
    }
}
</script>

<style scoped>
.home_battleLogin_container {
    width: 100vw;
    height: 100vh;
}
</style>
