import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connect: false,
        info: '',
        // userInfo: {}
        // 卡牌数据
        cardDataList: [],
        // 已加载完毕的卡牌图片
        loaded_cardImageData: {}
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
        },
        // 改变 已加载完毕的卡牌图片
        change_loaded_cardImageData (state, dat) {
            state.loaded_cardImageData = dat
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
        },
        // 设置 已加载完毕的卡牌图片
        set_loaded_cardImageData(context, dat) {
            context.commit('change_loaded_cardImageData', dat)
        }
    }
})