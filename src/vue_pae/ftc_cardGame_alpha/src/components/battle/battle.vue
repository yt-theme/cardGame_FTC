<template>
    <div class="battle_container">
       <!-- canvas -->
        <canvas ref="battleVisual"></canvas>

        <!-- 卡牌选择框 -->
        <div v-show="battle_cardSelector_show" class="battle_cardSelector">
            <!-- 卡牌切换栏 -->
            <ul class="battle_cardSelector_tab">
                <li @click="() => {battle_cardSelector_tab_active = 1}" :class="[battle_cardSelector_tab_active === 1 ? battle_cardSelector_tabLi_active : '', '']">角色牌</li>
                <li @click="() => {battle_cardSelector_tab_active = 2}" :class="[battle_cardSelector_tab_active === 2 ? battle_cardSelector_tabLi_active : '', '']">魔法牌</li>
            </ul>
            <!-- 卡牌展示区域 -->
            <div class="battle_cardSelector_view">
                <ul class="battle_cardSelector_view_inner">
                    <!-- 如果是角色牌 -->
                    <template v-if="battle_cardSelector_tab_active === 1" v-for="i in card_data_list">
                        <template v-if="String(i['type']) === '1'">
                            <li @click="cardSelector_card_click(i)">
                                <img :src="i['img_url']"/>
                                <P>{{i.name}}</P>
                                <i v-show="selected_card_arr.indexOf(i.id) !== -1">use</i>
                            </li>
                        </template>
                    </template>
                    <!-- 如果是魔法牌 -->
                    <template v-if="battle_cardSelector_tab_active === 2"  v-for="i in card_data_list">
                        <template v-if="String(i['type']) === '2'">
                            <li @click="cardSelector_card_click(i)">
                                <img :src="i['img_url']"/>
                                <P>{{i.name}}</P>
                                <i v-show="selected_card_arr.indexOf(i.id) !== -1">use</i>
                            </li>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
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

export default {
    data () {
        return {
            inviteCode: '',
            
            // -----------------------------------------
            // 卡牌选择框显示
            battle_cardSelector_show: false,
            // 卡牌选择tab 样式
            battle_cardSelector_tab_active: 1,
            // 卡牌选择tab class
            battle_cardSelector_tabLi_active: 'battle_cardSelector_tabLi_active',
            // 已选择的卡牌
            selected_card_arr: [],
            // -----------------------------------------

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
            
        }
    },
    computed: {
        card_data_list () {
            return this.$store.state.cardDataList
        }
    },
    methods: {
        // 卡牌点击时
        cardSelector_card_click (ite_obj) {
            // 判断 selected_card_arr 是否存在已点击项
            if (this.selected_card_arr.indexOf(ite_obj['id']) !== -1) {
                // 如果数组里存在已点击项则 删除数组中此项
                this.selected_card_arr.splice(this.selected_card_arr.indexOf(ite_obj['id']), 1)
            } else {
                this.selected_card_arr.push(ite_obj['id'])
            }
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
            
        },
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
.battle_container {
    position: relative;
    width: 100vw;
    height: 100vh;
}
.battle_cardSelector {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    min-width: 1000px;
    height: 80%;
    min-height: 700px;
    background-color: rgb(8, 38, 84);
    border-radius: 30px;
    border: 3px solid rgb(50, 96, 165);
}
.battle_cardSelector_tab {
    display: flex;
    list-style: none;
    /* border-bottom: 3px dotted rgb(50, 96, 165); */
    padding: 15px 15px;
}
.battle_cardSelector_tab> li {
    /* height: 70px; */
    color: rgb(128, 166, 223);
    border-radius: 13px;
    font-size: 33px;
    text-align: center;
    /* line-height: 70px; */
    padding: 0.1em 1em;
    transition: all 0.1s;
}
.battle_cardSelector_tab> li:hover {
    text-shadow: 0 0 8px rgb(128, 166, 223);
    cursor: pointer;
}
.battle_cardSelector_tab .battle_cardSelector_tabLi_active {
    border-radius: 13px;
    font-size: 33px;
    text-align: center;
    padding: 0.1em 1em;
    background-color: rgb(128, 166, 223);
    color: rgb(8, 38, 84);
}
.battle_cardSelector_view {
    width: 100%;
    height: calc(100% - 85px);
    padding: 1em;
    padding-top: 0;
}
.battle_cardSelector_view_inner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border-top: 3px solid rgb(50, 96, 165);
    padding: 1em 0;
    list-style: none;
    overflow-y: auto;
}
.battle_cardSelector_view_inner li {
    position: relative;
    margin-right: 1.8125em;
    /* padding: 1.5em 0.5em; */
    cursor: pointer;
    overflow: hidden;
}
.battle_cardSelector_view_inner li:hover p {
    text-shadow: 0 0 8px rgb(128, 166, 223);
}
.battle_cardSelector_view_inner li img {
    width: 100px;
}
.battle_cardSelector_view_inner li p {
    color: rgb(128, 166, 223);
    text-align: center;
    font-size: 16px;
}
.battle_cardSelector_view_inner li i {
    position: absolute;
    right: -25px;
    top: 8px;
    display: block;
    width: 90px;
    height: 20px;
    font-size: 20px;
    text-align: center;
    background-color: rgb(209, 49, 102);
    box-shadow: 3px solid rgba(128, 166, 223);
    color: #d3d3d3;
    transform: rotate(45deg);
    
}
</style>
