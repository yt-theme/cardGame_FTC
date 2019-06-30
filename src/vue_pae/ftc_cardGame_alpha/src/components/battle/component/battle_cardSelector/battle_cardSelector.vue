<template>
    <!-- ------------------------------------------------------------------------------------------ -->
    <!-- 卡牌选择框 -->
    <div v-show="battle_cardSelector_show" class="battle_cardSelector">
        <!-- 卡牌切换栏 -->
        <ul class="battle_cardSelector_tab">
            <li @click="() => {battle_cardSelector_tab_active = 1}" :class="[battle_cardSelector_tab_active === 1 ? battle_cardSelector_tabLi_active : '', '']">
                角色牌
                <!-- 已选当前类型卡牌数 -->
                <small>已选{{ selected_card_roleNum }}张</small>
            </li>
            <li @click="() => {battle_cardSelector_tab_active = 2}" :class="[battle_cardSelector_tab_active === 2 ? battle_cardSelector_tabLi_active : '', '']">
                魔法牌
                <!-- 已选当前类型卡牌数 -->
                <small>已选{{ selected_card_magicNum }}张</small>
            </li>
            <!-- 开始准备按钮 -->
            <button @click="prepared" v-show="selectCard_canPrepare" class="battle_cardSelector_pped">准备完毕</button>
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
                    <template v-if="String(i['type']) === '2' || String(i['type']) === '3'">
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
    <!-- ------------------------------------------------------------------------------------------ -->
</template>

<script>
export default {
    props: ['card_data_list', 'battle_cardSelector_show'],
    data () {
        return {
            // -----------------------------------------
            // 卡牌选择tab 样式
            battle_cardSelector_tab_active: 1,
            // 卡牌选择tab class
            battle_cardSelector_tabLi_active: 'battle_cardSelector_tabLi_active',
            // 已选择的卡牌
            selected_card_arr: [],
            // 已选择的角色/魔法牌数量
            selected_card_roleNum: 0,
            selected_card_magicNum: 0,
            // 已选择卡牌对象的级数组 里面包含所有卡牌信息数组
            selected_card_object_arr: [],
            // 已选择的卡牌是否可以开始游戏
            selectCard_canPrepare: false,
            // -----------------------------------------
        }
    },
    watch: {
        // 监听 已选择卡牌数量 判断是否显示准备完毕
        'selected_card_object_arr' (val) {
            let self = this
            // 角色/魔法牌数量
            self.selected_card_roleNum=0,  self.selected_card_magicNum=0
            val.forEach((ite) => { 
                if (String(ite['type']) === '1') {self.selected_card_roleNum += 1 }
                else { self.selected_card_magicNum += 1 }
            })

            // 判断数量 控制显示按钮
            if (this.selected_card_roleNum>=1 && this.selected_card_magicNum>=1) {
                this.selectCard_canPrepare = true
            } else {
                this.selectCard_canPrepare = false
            }
        }
    },
    methods: {
        // -------------------------------------------------
        // 卡牌点击时
        cardSelector_card_click (ite_obj) {
            // 判断 selected_card_arr 是否存在已点击项
            if (this.selected_card_arr.indexOf(ite_obj['id']) !== -1)   {
                // 如果数组里存在已点击项则 删除数组中此项
                let index = this.selected_card_arr.indexOf(ite_obj['id'])
                this.selected_card_arr.splice(index, 1)
                this.selected_card_object_arr.splice(index, 1)
            } else {
                this.selected_card_arr.push(ite_obj['id'])
                this.selected_card_object_arr.push(ite_obj)
            }
        },
        // 点击准备完毕按钮
        prepared () {
            this.$emit('prepared', this.selected_card_object_arr)
        }
        // -------------------------------------------------
    }
}
</script>

<style scoped>
@keyframes prepareBtn {
    0% { box-shadow: 0 0 14px #85eb55; }
    50% { box-shadow: 0 0 3px #85eb55; }
    100% { box-shadow: 0 0 14px #85eb55; }
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
    font-size: 29px;
    text-align: center;
    /* line-height: 70px; */
    padding: 0.1em 1em;
    transition: all 0.1s;
}
.battle_cardSelector_tab> li:hover {
    text-shadow: 0 0 8px rgb(128, 166, 223);
    cursor: pointer;
}
.battle_cardSelector_tab .battle_cardSelector_tabLi_active, .battle_cardSelector_tab .battle_cardSelector_pped {
    border-radius: 13px;
    font-size: 29px;
    text-align: center;
    background-color: rgb(128, 166, 223);
    color: rgb(8, 38, 84);
    padding: 0.1em 1em;
}
.battle_cardSelector_tab .battle_cardSelector_pped {
    position: absolute;
    right: 16px;
    border: 0;
    box-shadow: 0 0 14px #85eb55;
    background-color: rgb(42, 190, 109);
    color: #116809;
    cursor: pointer;
    animation: prepareBtn 0.5s infinite;
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
