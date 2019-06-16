import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connect: false,
        info: '',
        // userInfo: {}
        // 卡牌数据
        cardDataList: []
    },
    mutations: {
        'SOCKET_CONNECT' (state) {
            state.connect = true
        },
        'SOCKET_LOGINS' (state, info) {
            state.info = info
        },
        // SOCKET_USER_INFO(state, data) {
        //     state.userInfo = data
        // }
        
        // 改变 卡牌数据
        change_cardDataList (state, dat) {
            state.cardDataList = dat
        }
    },
    actions: {
        socketConnect(context, value) {
            console.log('连接成功')
        },
        socketLogins(context, value) {
            console.log('store =>', value)
        },

        // 设置 卡牌数据
        set_cardDataList (context, dat) {
            context.commit('change_cardDataList', dat)
        }
    }
})