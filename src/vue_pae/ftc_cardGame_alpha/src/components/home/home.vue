<template>
    <div class="home_container">
        <!-- 角色牌 标签页 -->
        <div ref="tabs_container_role" class="tabs_container tabs_role">
            <div class="tabs_wrap">
                <div class="tabs_content">
                    <div v-for="i in cardDataRole_list" @mousemove="show_bigCard($event, i)" @mouseleave="hide_bigCard($event)">
                        <img :src="i.img_url"/>
                    </div>
                </div>
            </div>
            <!-- 小标签部分 -->
            <div @click="click_roleTag" class="tabs_little_tag">
                角色牌
            </div>
        </div>
        <!-- 魔法牌 标签页 -->
        <div ref="tabs_container_magic" class="tabs_container tabs_magic">
            <div class="tabs_wrap">
                <div class="tabs_content">
                    <div v-for="i in cardDataMagic_list" @mousemove="show_bigCard($event, i)" @mouseleave="hide_bigCard($event)">
                        <img :src="i.img_url"/>
                    </div>
                </div>
            </div>
            <!-- 小标签部分 -->
            <div @click="click_magicTag" class="tabs_little_tag">
                魔法牌
            </div>
        </div>
        <!-- 对战登录框 -->
        <div v-show="battleShow" class="battleLogin_container">
            <Homebattlelogin></Homebattlelogin>
        </div>
        <!-- 查看卡牌大图 -->
        <div ref="lookbigcard_component" class="lookbigcard_wrapp" v-show="lookbigcard_show">
            <Lookbigcard :src="current_showBigCard_src" :text="current_showBigCard_text"></Lookbigcard>
        </div>
    </div>
</template>

<script>
import Homebattlelogin from './home_battleLogin/home_battleLogin'
import Lookbigcard from '../public/lookBigCard/lookBigCard'
import { api_queryCardJson } from '@/lib/api.js'
export default {
    components: {
        Homebattlelogin,
        Lookbigcard
    },
    data () {
        return {
            roleTag_toggle: true,
            magicTag_toggle: true,

            // 卡牌信息列表
            cardDataRole_list: [],
            cardDataMagic_list: [],

            // 查看大图显示
            lookbigcard_show: false,
            // 当前 需要查看大图的 卡牌
            current_showBigCard_src: '',
            current_showBigCard_text: {
                property: '暂无属性',
                skill_first: '暂无第一技能',
                skill_second: '暂无第二技能'
            },

            // 当前卡牌大图宽高 >0 值
            currentBigCardWH: {
                width: '',
                height: ''
            },
            // battle登录框是否显示
            battleShow: false
        }
    },
    methods: {
        // 点击了 角色牌 tag
        click_roleTag () {
            if (this.roleTag_toggle) {
                this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active tabs_role')
                this.roleTag_toggle = false
                if (this.magicTag_toggle === false) {
                    this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active_close tabs_magic')
                    this.magicTag_toggle = true
                }
            } else {
                this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active_close tabs_role')
                this.roleTag_toggle = true
            }
        },
        // 点击了 魔法卡 tag
        click_magicTag () {
            if (this.magicTag_toggle) {
                this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active tabs_magic')
                this.magicTag_toggle = false
                if (this.roleTag_toggle === false) {
                    this.$refs.tabs_container_role.setAttribute('class', 'tabs_container tabs_container_active_close tabs_role')
                    this.roleTag_toggle = true
                }
            } else {
                this.$refs.tabs_container_magic.setAttribute('class', 'tabs_container tabs_container_active_close tabs_magic')
                this.magicTag_toggle = true
            }
        },
        // 请求卡牌 数据列表
        queryCardJson () {
            let __this__ = this
            api_queryCardJson({

            }).then((v) => {
                if (v['data']['stat'] === 1) {
                    this.battleShow = true
                    __this__.cardDataRole_list = []
                    __this__.cardDataMagic_list = []
                    // 卡牌分类 => type: 1角色牌 2魔法牌
                    const json = JSON.parse(v['data']['data'])
                    json.forEach((ite) => {
                        // 如果是角色牌
                        if (ite['type'] === 1) {
                            __this__.cardDataRole_list.push(ite)
                        // 如果是魔法牌
                        } else if (ite['type'] === 2 || ite['type'] === 3) {
                            __this__.cardDataMagic_list.push(ite)
                        }
                    })
                    // 存入 store
                    this.$store.dispatch('set_cardDataList', json)
                    console.log('store', this.$store.state.cardDataList)
                }
            }).catch((err) => {

            })
        },
        // 查看卡牌大图事件
        show_bigCard (event, cardObj) {
            // 图片
            this.current_showBigCard_src = cardObj.img_url
            // text内容
            this.current_showBigCard_text = {
                property: cardObj.role_property || '暂无属性',
                skill_first: cardObj.skill_first_text || '暂无第一技能',
                skill_second: cardObj.skill_second_text || '暂无第二技能'
            }
            
            // 获取框宽度 高度
            let boxWidth = this.$refs.lookbigcard_component.offsetWidth
            if (boxWidth > 0 ) {
                this.currentBigCardWH.width = boxWidth
            } else {
                if (this.currentBigCardWH.width > 0) {
                    boxWidth = this.currentBigCardWH.width 
                }
            }
            let boxHeight = this.$refs.lookbigcard_component.offsetHeight
            if (boxHeight > 0 ) {
                this.currentBigCardWH.height = boxHeight
            } else {
                if (this.currentBigCardWH.height  > 0) {
                    boxHeight = this.currentBigCardWH.height 
                }
            }

            // 屏幕宽度 高度
            let screenWidth = document.body.clientWidth
            let screenHeight = document.body.clientHeight
            
            // 如果框右边超过显示区域长度则显示至左边
            if ( (event.clientX + boxWidth + 20) >= screenWidth ) {
                this.$refs.lookbigcard_component.style.left = (event.clientX - boxWidth - 20) + 'px'
            } else {
                this.$refs.lookbigcard_component.style.left = (event.clientX + 20) + 'px'
            }

            console.log('event', event.clientX, event.clientY, boxWidth, screenWidth)

            // 如果框下面超过屏幕高则显示至上面
            if ( (event.clientY + boxHeight + 20) >= screenHeight ) {
                this.$refs.lookbigcard_component.style.top = (event.clientY - ((event.clientY + boxHeight + 20) - screenHeight)) + 'px'
            } else {
                this.$refs.lookbigcard_component.style.top = (event.clientY - 20) + 'px'
            }
            this.$nextTick(()=>{
                this.lookbigcard_show = true
            })
        },
        // 隐藏卡牌大图事件
        hide_bigCard (event) {
            this.$nextTick(()=>{
                this.lookbigcard_show = false
            })
        }
    },
    mounted () {
        // 请求卡牌
        this.queryCardJson()
    }
}
</script>

<style scoped>
.home_container {
    background-color: #0b3469;
}
@keyframes tabs_container_dropDown {
    0% { top: calc(-80vh - 6px); }
    100% { top: 10vh; }
}
@keyframes tabs_container_dropDown_close {
    0% { top: 10vh; }
    100% { top: calc(-80vh - 6px); }
}
.tabs_container {
    position: absolute;
    left: 5vw;
    top: calc(-80vh - 6px);
    width: 90vw;
    height: 80vh;
    background-color: rgb(50, 96, 165);
    border-radius: 15px;
    z-index: 999;
}

.tabs_container_active {
    animation: tabs_container_dropDown 0.5s;
    animation-fill-mode: forwards;
}
.tabs_container_active_close {
    animation: tabs_container_dropDown_close 0.5s;
    animation-fill-mode: forwards;
}
.tabs_role {

}
.tabs_magic {
    /* left: 20%; */
}
.tabs_wrap {
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 20px);
    height: calc(100% - 40px);
    overflow: auto;
}
.tabs_content {
    position: absolute;
    /* overflow: auto; */
}
.tabs_content> div {
    display: inline-block;
    border-radius: 5px;
    padding: 20px 10px 10px 10px;
}
.tabs_content> div> img {
    width: 100px;
    height: auto;
    box-shadow: 0 0 5px rgb(2, 14, 31);
}
.tabs_content ul {
    list-style: none;
}
.tabs_little_tag {
    position: absolute;
    left: 30px;
    bottom: -60px;
    width: 14%;
    min-width: 170px;
    max-width: 200px;
    /* height: 10%; */
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 6.1px rgb(2, 14, 31);
    background-color: rgb(50, 96, 165);
    border-radius: 0 0 10px 10px;
    font-size: 2.3em;
    color: rgb(128, 166, 223);
    cursor: pointer;
}
.tabs_container:nth-child(2) .tabs_little_tag {
    left: calc(5vw + 170px);
}
.battleLogin_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
.lookbigcard_wrapp {
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    min-width: 410px;
    z-index: 9999;
    /* transition: all linear 0.17s; */
}
</style>
