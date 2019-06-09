import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connect: false,
        info: '',
        // userInfo: {}
    },
    mutations: {
        'SOCKET_CONNECT' (state) {
            state.connect = true
        },
        'SOCKET_LOGINS' (state, info) {
            state.info = info
        }
        // SOCKET_USER_INFO(state, data) {
        //     state.userInfo = data
        // }
    },
    actions: {
        socketConnect(context, value) {
            console.log('连接成功')
        },
        socketLogins(context, value) {
            console.log('store =>', value)
        }
    }
})